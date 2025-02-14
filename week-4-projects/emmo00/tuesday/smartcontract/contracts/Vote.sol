// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// @author: Emmanuel Nwafor(Emmo00)
event VotingStarted(uint256 electionIndex);
event VotingEnded(uint256 electionIndex);
event ContestantRegistered(uint256 electionIndex, string name, string party, string manifesto);

contract Vote {
    struct Voter {
        string name;
        uint8 age;
        string NIN;
        string nationality;
    }

    struct Contestant {
        string name;
        uint8 age;
        string party;
        string manifesto;
        uint256 votes;
    }

    struct Election {
        string name;
        uint duration;
        uint startTime;
        uint endTime;
        bool isActive;
        Contestant winner;
        address[] admins;
        Contestant[] contestants;
    }

    Election[] public elections;
    mapping(address => Voter) public voters;
    mapping(address => mapping(uint256 => bool)) votersAuthorization; // voterAddress => electionIndex => isAuthorized
    mapping(address => mapping(uint256 => bool)) votersVoted; // voterAddress => electionIndex => hasVoted

    modifier onlyOnNotStartedElections(uint256 electionIndex) {
        // check election exists
        require(electionIndex < elections.length, "Election does not exist");
        require(!elections[electionIndex].isActive, "Election is active");
        _;
    }

    modifier onlyOnActiveElections(uint256 electionIndex) {
        // check election exists
        require(electionIndex < elections.length, "Election does not exist");
        require(elections[electionIndex].isActive, "Election is not active");

        if (block.timestamp >= elections[electionIndex].endTime) {
            // emit election time ended event
            emit VotingEnded(electionIndex);
        }

        require(
            block.timestamp < elections[electionIndex].endTime,
            "Election has ended"
        );

        _;
    }

    modifier onlyElectionAdmins(uint256 electionIndex) {
        Election storage election = elections[electionIndex];

        bool isAdmin = false;
        for (uint i = 0; i < election.admins.length; i++) {
            if (election.admins[i] == msg.sender) {
                isAdmin = true;
                break;
            }
        }
        require(isAdmin, "You are not an admin");
        _;
    }

    modifier onlyRegisteredVoters(uint256 electionIndex) {
        require(
            votersAuthorization[msg.sender][electionIndex],
            "You are not authorized to vote"
        );
        _;
    }

    function createElection(
        string memory _name,
        uint256 _duration
    ) public returns (Election memory) {
        uint256 electionIndex = elections.length;
    elections.push(); // Add empty election first

        Election storage newElection = elections[electionIndex];

        newElection.name = _name;
        newElection.duration = _duration;
        newElection.startTime = 0;
        newElection.endTime = 0;
        newElection.isActive = false;
        newElection.winner = Contestant("", 0, "", "", 0);
        newElection.admins = new address[](5);
        newElection.admins[0] = msg.sender; // the first admin is the creator of the election

        return newElection;
    }

    function startElection(uint256 electionIndex) public onlyElectionAdmins(electionIndex) {
        elections[electionIndex].isActive = true;

        elections[electionIndex].startTime = block.timestamp;
        elections[electionIndex].endTime = block.timestamp + elections[electionIndex].duration;

        emit VotingStarted(elections.length - 1);
    }

    function addElectionAdmin(uint256 electionIndex, address adminAddress) public onlyElectionAdmins(electionIndex) {
        require(adminAddress != address(0), "Invalid Address");
        require(elections[electionIndex].admins.length < 5, "Number of Admin limit reached");

        elections[electionIndex].admins.push(adminAddress);
    }

    function registerContestant(
        uint256 electionIndex,
        string memory _name,
        uint8 age,
        string memory _party,
        string memory _manifesto
    )
        public
        onlyOnNotStartedElections(electionIndex)
        onlyElectionAdmins(electionIndex)
        returns (Contestant memory)
    {
        // check contestant does not exist
        for (uint i = 0; i < elections[electionIndex].contestants.length; i++) {
            require(
                keccak256(
                    abi.encodePacked(
                        elections[electionIndex].contestants[i].name
                    )
                ) != keccak256(abi.encodePacked(_name)),
                "Contestant already exists"
            );
        }

        elections[electionIndex].contestants.push();

        // create contestant
        Contestant storage newContestant = elections[electionIndex].contestants[elections[electionIndex].contestants.length - 1];

        newContestant.name = _name;
        newContestant.age = age;
        newContestant.party = _party;
        newContestant.manifesto = _manifesto;
        newContestant.votes = 0;

        emit ContestantRegistered(electionIndex, newContestant.name, newContestant.party, newContestant.manifesto);

        return newContestant;
    }

    function registerVoterForElection(
        address voterAddress,
        uint256 electionIndex
    )
        public
        onlyOnActiveElections(electionIndex)
        onlyElectionAdmins(electionIndex)
    {
        require(
            !votersAuthorization[voterAddress][electionIndex],
            "Voter already registered"
        );

        votersAuthorization[voterAddress][electionIndex] = true;
    }

    function registerSelfAsVoter(
        string memory _name,
        uint8 age,
        string memory _nin,
        string memory _nationality
    ) public {
        require(
            keccak256(abi.encodePacked(voters[msg.sender].name)) ==
                keccak256(abi.encodePacked("")),
            "You are already registered"
        );

        Voter memory newVoter;

        newVoter.name = _name;
        newVoter.age = age;
        newVoter.NIN = _nin;
        newVoter.nationality = _nationality;

        voters[msg.sender] = newVoter;
    }

    function vote(
        uint256 electionIndex,
        uint256 contestantIndex
    )
        public
        onlyOnActiveElections(electionIndex)
        onlyRegisteredVoters(electionIndex)
    {
        require(
            !votersVoted[msg.sender][electionIndex],
            "You have already voted"
        );

        require(contestantIndex < elections[electionIndex].contestants.length, "Invalid contestant index");

        elections[electionIndex].contestants[contestantIndex].votes += 1;
        votersVoted[msg.sender][electionIndex] = true;
    }

    function endElection(
        uint256 electionIndex
    )
        public
        onlyOnActiveElections(electionIndex)
        onlyElectionAdmins(electionIndex)
    {
        elections[electionIndex].isActive = false;

        require(elections[electionIndex].contestants.length > 0, "Election Had no contestants");

        // calculate winner
        uint256 maxVotes = 0;
        uint256 winnerIndex = 0;
        for (uint i = 0; i < elections[electionIndex].contestants.length; i++) {
            if (elections[electionIndex].contestants[i].votes > maxVotes) {
                maxVotes = elections[electionIndex].contestants[i].votes;
                winnerIndex = i;
            }
        }
        
        elections[electionIndex].winner = Contestant(
            elections[electionIndex].contestants[winnerIndex].name,
            elections[electionIndex].contestants[winnerIndex].age,
            elections[electionIndex].contestants[winnerIndex].party,
            elections[electionIndex].contestants[winnerIndex].manifesto,
            elections[electionIndex].contestants[winnerIndex].votes
        );
    }

    function getWinner(
        uint256 electionIndex
    ) public view returns (Contestant memory) {
        require(
            elections[electionIndex].isActive == false,
            "Election is still active"
        );

        Contestant memory winner = elections[electionIndex].winner;

        return winner;
    }
}
