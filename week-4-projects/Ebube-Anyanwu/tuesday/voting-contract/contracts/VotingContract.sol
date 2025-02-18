// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

contract VotingContract {
    enum Party {
        PDP,
        APC,
        APGA,
        LP
    }
    string constant NATIONALITY = "Nigerian";

    struct Voter {
        string name;
        uint age;
        string NIN;
        string nationaltiy;
        bool hasVoted;
        bool isRegistered;
    }

    struct Contestant {
        string name;
        uint age;
        string nationality;
        Party party;
        string manifesto;
        uint voteCount;
        bool isRegistered;
    }

    mapping(address => bool) public isAdmin;
    mapping(address => Voter) public voters;
    mapping(address => Contestant) public contestants;
    address[] public contestantAddresses;
    bool public electionHasStarted;
    bool public electionHasEnded;
    uint public electionEndTime;
    uint public totalVotes;
    string public presidentElect;

    modifier OnlyAdmin() {
        require(isAdmin[msg.sender], "Only admin can perform this operation");
        _;
    }

    modifier OnlyDuringElection() {
        require(
            electionHasStarted && !electionHasEnded,
            "Election is not active"
        );
        _;
    }

    constructor(address[] memory _admins, uint _electionDuration) {
        require(_admins.length == 5, "Exactly 5 admins are needed");
        for (uint i; i < _admins.length; i++) {
            isAdmin[_admins[i]] = true;
        }

        electionEndTime = block.timestamp + _electionDuration;
    }

    function registerContestant(
        address _contestant,
        string calldata _name,
        uint _age,
        string calldata _nationality,
        Party _party,
        string calldata _manifesto
    ) external OnlyAdmin {
        require(
            !contestants[_contestant].isRegistered,
            "This contestant is already registered"
        );
        require(_age >= 30, "Contestant must be up to 35 years old");
        require(_age <= 65, "Contestant must not be more than 65 years old");
        require(
            keccak256(abi.encodePacked(_nationality)) ==
                keccak256(abi.encodePacked(NATIONALITY)),
            "Contestant must be Nigerian"
        );
        contestants[_contestant] = Contestant(
            _name,
            _age,
            _nationality,
            _party,
            _manifesto,
            0,
            true
        );
        contestantAddresses.push(_contestant);
    }

    function registerVoter(
        address _voter,
        string calldata _name,
        uint _age,
        string calldata _NIN,
        string calldata _nationality
    ) external OnlyAdmin {
        require(
            !voters[_voter].isRegistered,
            "This voter is already registered"
        );
        require(_age >= 18, "Voter must be up to 18 years old");
        require(
            keccak256(abi.encodePacked(_nationality)) ==
                keccak256(abi.encodePacked(NATIONALITY)),
            "Voter must be Nigerian"
        );
        voters[_voter] = Voter(_name, _age, _NIN, _nationality, false, true);
    }

    function startElection() external OnlyAdmin {
        require(!electionHasStarted, "Elections has already Started");
        electionHasStarted = true;
    }

    function vote(address _contestant) external OnlyDuringElection {
        require(
            voters[msg.sender].isRegistered,
            "You must be a registered voter"
        );
        require(!voters[msg.sender].hasVoted, "You have already voted before");
        require(
            contestants[_contestant].isRegistered,
            "Invalid Contestant address"
        );

        voters[msg.sender].hasVoted = true;
        contestants[_contestant].voteCount += 1;
        totalVotes += 1;
    }

    function endElection() external OnlyAdmin {
        require(electionHasStarted, "Election has not started");
        require(
            block.timestamp >= electionEndTime,
            "Election period is not over"
        );
        electionHasEnded = true;

        string memory winner;
        uint highestVote = 0;

        for (uint i; i < contestantAddresses.length; i++) {
            if (contestants[contestantAddresses[i]].voteCount > highestVote) {
                highestVote = contestants[contestantAddresses[i]].voteCount;
                winner = contestants[contestantAddresses[i]].name;
            }

            presidentElect = winner;
        }
    }

    function getContestantVoteCount(
        address _contestant
    ) external view returns (uint) {
        require(contestants[_contestant].isRegistered, "Invalid Contestant");
        return contestants[_contestant].voteCount;
    }
}
