// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MYSimpleVotingPrototype {
    struct RegisterVoter {
        uint256 voter_no;
        string votername;
        uint256 age;
        uint256 NationalID_no;
        string politicalparty;
        address voteraddr;
    }
  
    mapping(address => RegisterVoter) public Voter;
    mapping(address => bool) public voted;
   
    uint public votercount;
    function addvoter(
        string memory _name,
        uint256 age,
        uint256 nationalID_no,
        string memory _politicalparty
    ) public {
        votercount++;
        Voter[msg.sender] = RegisterVoter(votercount,_name,age,nationalID_no,_politicalparty,msg.sender);
    }
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
        string politicalparty;
    }
    uint256 public candidatesCount;
    mapping(uint256 => Candidate) public candidates;
    event VotedEvent(uint256 indexed candidateId);
    function addCandidate(string memory _name, string memory _politicalparty) public {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(
            candidatesCount,
            _name,
            0,
            _politicalparty
        );
    }
    function getCandidate(uint256 _candidateId) public view returns (uint256,string memory,uint256,string memory) {
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID.");
        Candidate memory candidate = candidates[_candidateId];
        return (candidate.id, candidate.name, candidate.voteCount, candidate.politicalparty);
    }
    function vote(uint256 _candidateId) public {
        require(!voted[msg.sender], "You have already voted.");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID.");
        
        string memory voterParty = Voter[msg.sender].politicalparty;
        string memory candidateParty = candidates[_candidateId].politicalparty;
        
        require(bytes(voterParty).length > 0, "Voter not registered");
        
        require(keccak256(abi.encodePacked(voterParty)) == keccak256(abi.encodePacked(candidateParty)),
                "Voter can only vote for candidates from their political party");
    
        voted[msg.sender] = true;
        candidates[_candidateId].voteCount++;
        emit VotedEvent(_candidateId);
    }
}
