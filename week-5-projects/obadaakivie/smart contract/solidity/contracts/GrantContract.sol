// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract GrantContract {
    struct Grant {
        uint256 amount;
        uint256 releaseTime;
        bool exists;
    }
    
    address public owner;
    mapping(address => Grant) public grants;
    uint256 public totalFunds;
    
    event GrantCreated(address  beneficiary, uint256 amount, uint256 releaseTime);
    event GrantReverted(address  beneficiary, uint256 amount);
    event GrantWithdrawn(address  beneficiary, uint256 amount);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    modifier onlyBeneficiary() {
        require(grants[msg.sender].exists, "No grant assigned");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function createGrant(address _beneficiary, uint256 _releaseTime) external payable onlyOwner {
        require(msg.value > 0, "Grant amount must be greater than zero");
        require(!grants[_beneficiary].exists, "Beneficiary already has a grant");
        require(_releaseTime > block.timestamp, "Release time must be in the future");
        
        grants[_beneficiary] = Grant({
            amount: msg.value,
            releaseTime: _releaseTime,
            exists: true
        });
        totalFunds += msg.value;
        
        emit GrantCreated(_beneficiary, msg.value, _releaseTime);
    }
    
    function revertGrant(address _beneficiary) external onlyOwner {
        require(grants[_beneficiary].exists, "Grant does not exist");
        require(block.timestamp < grants[_beneficiary].releaseTime, "Grant already released");
        
        uint256 amount = grants[_beneficiary].amount;
        delete grants[_beneficiary];
        totalFunds -= amount;
        
        payable(owner).transfer(amount);
        emit GrantReverted(_beneficiary, amount);
    }
    
    function withdrawGrant() external onlyBeneficiary {
        Grant memory grant = grants[msg.sender];
        require(block.timestamp >= grant.releaseTime, "Grant not yet available");
        
        uint256 amount = grant.amount;
        delete grants[msg.sender];
        totalFunds -= amount;
        
        payable(msg.sender).transfer(amount);
        emit GrantWithdrawn(msg.sender, amount);
    }
    
    function getGrantDetails(address _beneficiary) external view returns (uint256, uint256, bool) {
        Grant memory grant = grants[_beneficiary];
        return (grant.amount, grant.releaseTime, grant.exists);
    }
    
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
    
    function timeLeft(address _beneficiary) external view returns (uint256) {
        require(grants[_beneficiary].exists, "Grant does not exist");
        if (block.timestamp >= grants[_beneficiary].releaseTime) {
            return 0;
        }
        return grants[_beneficiary].releaseTime - block.timestamp;
    }
}
