// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract VotingContract {
    struct Voter {
        bytes32 hashedNIN;
        string name;
        uint age;
        string nationality;
        bool hasVoted;
    }
    
    struct Candidate {
        string name;
        uint age;
        string party;
        string manifesto;
        uint voteCount;
    }
    
    enum Role { None, ChiefElectoralOfficer, ElectoralOfficer1, ElectoralOfficer2, ElectoralOfficer3, ElectoralOfficer4, ElectoralOfficer5 }
    
    address public chiefElectoralOfficer;
    mapping(address => Role) public admins;
    mapping(bytes32 => bool) private registeredNINs;
    mapping(address => Voter) public voters;
    Candidate[] public candidates;
    
    bool public electionPaused;
    bool public electionEnded;
    uint public electionStart;
    uint public electionEnd;
    
    event VoterRegistered(address voter);
    event CandidateRegistered(string name, string party);
    event Voted(address voter, string candidate);
    event ElectionPaused(bool status);
    event AdminRemoved(address admin);
    
    modifier onlyAdmin() {
        require(admins[msg.sender] != Role.None, "Not an admin");
        _;
    }
    
    modifier onlyChiefElectoralOfficer() {
        require(msg.sender == chiefElectoralOfficer, "Not the Chief Electoral Officer");
        _;
    }
    
    modifier electionActive() {
        require(block.timestamp >= electionStart && block.timestamp <= electionEnd, "Election is not active");
        require(!electionPaused, "Election is paused");
        _;
    }
    
    constructor(address _chiefElectoralOfficer) {
        chiefElectoralOfficer = _chiefElectoralOfficer;
        admins[_chiefElectoralOfficer] = Role.ChiefElectoralOfficer;
    }
    
    function registerAdmin(address _admin, Role _role) external onlyChiefElectoralOfficer {
        require(_role != Role.None, "Invalid role");
        require(admins[_admin] == Role.None, "Admin already exists");
        admins[_admin] = _role;
    }
    
    function removeAdmin(address _admin) external onlyChiefElectoralOfficer {
        require(admins[_admin] != Role.None, "Admin does not exist");
        admins[_admin] = Role.None;
        emit AdminRemoved(_admin);
    }
    
    function registerVoter(string memory _name, uint _age, string memory _nationality, string memory _nin) external onlyAdmin {
        require(_age >= 18, "Voter must be at least 18");
        bytes32 hashedNIN = keccak256(abi.encodePacked(_nin));
        require(!registeredNINs[hashedNIN], "NIN already registered");
        
        voters[msg.sender] = Voter({
            hashedNIN: hashedNIN,
            name: _name,
            age: _age,
            nationality: _nationality,
            hasVoted: false
        });
        registeredNINs[hashedNIN] = true;
        emit VoterRegistered(msg.sender);
    }
    
    function registerCandidate(string memory _name, uint _age, string memory _party, string memory _manifesto) external onlyAdmin {
        require(_age >= 30, "Candidate must be at least 30");
        candidates.push(Candidate(_name, _age, _party, _manifesto, 0));
        emit CandidateRegistered(_name, _party);
    }
    
    function vote(uint _candidateIndex) external electionActive {
        require(!voters[msg.sender].hasVoted, "Already voted");
        require(_candidateIndex < candidates.length, "Invalid candidate");
        
        voters[msg.sender].hasVoted = true;
        candidates[_candidateIndex].voteCount++;
        emit Voted(msg.sender, candidates[_candidateIndex].name);
    }
    
    function pauseElection(bool _status) external onlyAdmin {
        electionPaused = _status;
        emit ElectionPaused(_status);
    }
    
    function setElectionPeriod(uint _start, uint _end) external onlyAdmin {
        require(_start < _end, "Invalid dates");
        electionStart = _start;
        electionEnd = _end;
    }
    
    function getResults() external view returns (string memory winner, uint votes) {
        require(block.timestamp > electionEnd, "Election still ongoing");
        uint maxVotes;
        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > maxVotes) {
                maxVotes = candidates[i].voteCount;
                winner = candidates[i].name;
            }
        }
        return (winner, maxVotes);
    }
}
