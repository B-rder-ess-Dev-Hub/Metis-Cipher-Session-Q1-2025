// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract VotingContract {
    struct Voter {
        string name;
        uint age;
        string NIN; 
        string nationality; 
        bool isRegistered;
        bool hasVoted; 
    }

    struct Contestant {
        string name; 
        uint age; 
        string party; 
        string manifesto; 
        uint voteCount; 
    }

    address[] public admins; 
    mapping(address => bool) public isAdmin; 
    mapping(string => Voter) public voters; 
    Contestant[] public contestants; 
    uint public votingStartTime; 
    uint public votingEndTime; 
    string public presidentElect; 

    event VoterRegistered(string nin, string name); 
    event ContestantRegistered(string name, string party); 
    event Voted(string voterNin, string contestantName); 
    event PresidentElectDeclared(string presidentElect); 

    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admins can perform this action");
        _;
    }

    modifier votingPeriod() {
        require(block.timestamp >= votingStartTime && block.timestamp <= votingEndTime, "Voting is not active");
        _;
    }

    constructor(uint _votingDurationInMinutes) {
        admins.push(msg.sender);
        isAdmin[msg.sender] = true;

        votingStartTime = block.timestamp;
        votingEndTime = votingStartTime + (_votingDurationInMinutes * 1 minutes);
    }

    function addAdmin(address _newAdmin) public onlyAdmin {
        require(admins.length < 5, "Maximum number of admins reached");
        admins.push(_newAdmin);
        isAdmin[_newAdmin] = true;
    }

    function registerVoter(string memory _name, uint _age, string memory _nin, string memory _nationality) public onlyAdmin {
        require(!voters[_nin].isRegistered, "Voter already registered");
        require(_age >= 18, "Voter must be at least 18 years old");

        voters[_nin] = Voter({
            name: _name,
            age: _age,
            NIN: _nin,
            nationality: _nationality,
            isRegistered: true,
            hasVoted: false
        });

        emit VoterRegistered(_nin, _name);
    }

    function registerContestant(string memory _name, uint _age, string memory _party, string memory _manifesto) public onlyAdmin {
        contestants.push(Contestant({
            name: _name,
            age: _age,
            party: _party,
            manifesto: _manifesto,
            voteCount: 0
        }));

        emit ContestantRegistered(_name, _party);
    }

    function vote(string memory _nin, uint _contestantIndex) public votingPeriod {
        require(voters[_nin].isRegistered, "Voter not registered");
        require(!voters[_nin].hasVoted, "Voter has already voted");
        require(_contestantIndex < contestants.length, "Invalid contestant index");

        voters[_nin].hasVoted = true;
        contestants[_contestantIndex].voteCount++;

        emit Voted(_nin, contestants[_contestantIndex].name);
    }

    function getContestantVotes(uint _contestantIndex) public view returns (uint) {
        require(_contestantIndex < contestants.length, "Invalid contestant index");
        return contestants[_contestantIndex].voteCount;
    }

    function getTotalVotes() public view returns (uint) {
        uint totalVotes = 0;
        for (uint i = 0; i < contestants.length; i++) {
            totalVotes += contestants[i].voteCount;
        }
        return totalVotes;
    }

    function declarePresidentElect() public onlyAdmin {
        require(block.timestamp > votingEndTime, "Voting period has not ended");

        uint maxVotes = 0;
        uint winningIndex = 0;

        for (uint i = 0; i < contestants.length; i++) {
            if (contestants[i].voteCount > maxVotes) {
                maxVotes = contestants[i].voteCount;
                winningIndex = i;
            }
        }

        presidentElect = contestants[winningIndex].name;
        emit PresidentElectDeclared(presidentElect);
    }
}