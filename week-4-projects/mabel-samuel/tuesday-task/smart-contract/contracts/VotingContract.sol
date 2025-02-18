// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract VotingContract{
    struct Voter {
        string name;
        uint256 age;
        string NIN;
        string nationality;
        bool hasVoted;
        bool isRegistered;
    }

    struct Contestant {
        string name;
        uint256 age;
        string party;
        string manifesto;
        uint256 voteCount;
        bool isRegistered;
    }

    address[] public admins;
    mapping(address => Voter) public voters;
    mapping(address => Contestant) public contestants;
    address[] public contestantList;
    bool public electionActive;
    uint256 public electionEndTime;
    address public presidentElect;
    uint256 public totalVotes;

    modifier onlyAdmin() {
    require(_isAdmin(msg.sender), "Only an admin can perform this action");
    _;
    }

    modifier onlyDuringElection() {
        require(electionActive, "Election is not active");
        require(block.timestamp < electionEndTime, "Election has ended");
        _;
    }

    modifier onlyAfterElection() {
        require(block.timestamp >= electionEndTime, "Election is still ongoing");
        _;
    }

    constructor(address[] memory _admins, uint256 _electionDuration) {
        require(_admins.length > 0 && _admins.length <= 5, "Admins must be between 1 and 5");

        for (uint i = 0; i < _admins.length; i++) {
            require(!_isAdmin(_admins[i]), "Duplicate admin not allowed");
            admins.push(_admins[i]);
        }
        electionEndTime = block.timestamp + _electionDuration;
        electionActive = false;
        totalVotes = 0;
    }

    function _isAdmin(address _admin) internal view returns (bool) {
        for (uint i = 0; i < admins.length; i++) {
            if (admins[i] == _admin) {
                return true;
            }
        }
        return false;
    }

    function addAdmin(address _newAdmin) public onlyAdmin {
    require(admins.length < 5, "Cannot have more than 5 admins");
    require(!_isAdmin(_newAdmin), "Admin already exists");

    admins.push(_newAdmin);
    }


    function startElection() public onlyAdmin {
        require(!electionActive, "Election already started");
        electionActive = true;
    }

    function registerVoter(address _voter, string memory _name, uint256 _age, string memory _NIN, string memory _nationality) public onlyAdmin {
        require(!voters[_voter].isRegistered, "Voter is already registered");
        require(_age >= 18, "Voter must be at least 18 years old");
        require(keccak256(abi.encodePacked(_nationality)) == keccak256(abi.encodePacked("Nigerian")), "Only Nigerians can vote");
        
        voters[_voter] = Voter(_name, _age, _NIN, _nationality, false, true);
    }

    function registerContestant(address _contestant, string memory _name, uint256 _age, string memory _party, string memory _manifesto) public {
        require(!contestants[_contestant].isRegistered, "Contestant already registered");
        require(_age >= 35, "Contestant must be at least 35 years old");
        
        contestants[_contestant] = Contestant(_name, _age, _party, _manifesto, 0, true);
        contestantList.push(_contestant);
    }

    function vote(address _contestant) public onlyDuringElection {
        require(voters[msg.sender].isRegistered, "You are not a registered voter");
        require(!voters[msg.sender].hasVoted, "You have already voted");
        require(contestants[_contestant].isRegistered, "Invalid contestant");

        voters[msg.sender].hasVoted = true;
        contestants[_contestant].voteCount++;
        totalVotes++;
    }

    function getVoteCount(address _contestant) public view returns (uint256) {
        require(contestants[_contestant].isRegistered, "Invalid contestant");
        return contestants[_contestant].voteCount;
    }

    function getTotalVotes() public view returns (uint256) {
        return totalVotes;
    }

    function endElection() public onlyAfterElection {
        require(electionActive, "Election already ended");
        electionActive = false;
        
        address winner;
        uint256 highestVotes = 0;
        
        for (uint i = 0; i < contestantList.length; i++) {
            if (contestants[contestantList[i]].voteCount > highestVotes) {
                highestVotes = contestants[contestantList[i]].voteCount;
                winner = contestantList[i];
            }
        }
        
        presidentElect = winner;
    }
}