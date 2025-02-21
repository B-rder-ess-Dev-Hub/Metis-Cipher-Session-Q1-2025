// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract VictorGrantContract {
    uint public GrantAmount; 
    //amount total to be set for the beneficiaries alltogether

    struct GrantDT {
        //grant details per beneficiary
        address payable beneficiary;
        uint256 amount;
        uint256 releaseTime;
        bool isActive;
    }
  mapping(address => GrantDT) public grants;
   //setting each benefiaciry address to their grant details
    
    address public owner;
     constructor() {
        owner = msg.sender;
    }

    

    
    event GrantCreated(address indexed beneficiary, uint256 amount, uint256 releaseTime);
    event GrantReverted(address indexed beneficiary, uint256 amount);
    event GrantReleased(address indexed beneficiary, uint256 amount);

    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only creator can use this function");
        _;
    }

    
    modifier onlyActiveGrant(address beneficiary) {
        require(grants[beneficiary].isActive, "No grant assigned to this caller yet!");
        _;
    }


  
    
    function createGrant(address payable beneficiary, uint256 releaseTime) public payable onlyOwner {
       
        require(msg.value > 0, "Grant amount must be greater than 0");
        require(!grants[beneficiary].isActive, "it appears a grant already exists for this beneficiary");

        grants[beneficiary] = GrantDT({
            beneficiary: beneficiary,
            amount: msg.value,
            releaseTime: releaseTime,
            isActive: true
        });

        GrantAmount += msg.value;
        emit GrantCreated(beneficiary, msg.value, releaseTime);
    }

    
    function revertGrant(address payable beneficiary) public onlyOwner onlyActiveGrant(beneficiary) {
        require(block.timestamp < grants[beneficiary].releaseTime, "Grant has already been released");

        uint256 amount = grants[beneficiary].amount;
        GrantAmount -= amount;
        grants[beneficiary].isActive = false;

        payable(owner).transfer(amount);
        emit GrantReverted(beneficiary, amount);
    }

  
    function releaseGrant() public onlyActiveGrant(msg.sender) {
        require(block.timestamp >= grants[msg.sender].releaseTime, "Grant release time has not run out");

        uint256 amount = grants[msg.sender].amount;
        GrantAmount -= amount;
        grants[msg.sender].isActive = false;

        payable(msg.sender).transfer(amount);
        emit GrantReleased(msg.sender, amount);
    }

    
    function getbeneficiaryInfo(address beneficiary) public view returns (address, uint256, uint256, bool) {
        GrantDT memory grant = grants[beneficiary];
        return (grant.beneficiary, grant.amount, grant.releaseTime, grant.isActive);
    }

    
    
    function getTimeLeft(address beneficiary) public view onlyActiveGrant(msg.sender) returns (uint256) {
        if (block.timestamp >= grants[beneficiary].releaseTime) {
            return 0;
        } else {
            return grants[beneficiary].releaseTime - block.timestamp;
        }
    }
}
