// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract GrantContract {
    struct Grant {
        uint256 amount;
        uint256 unlockTime;
        address beneficiary;
        bool exists;
    }

    address public owner;
    mapping(address => Grant) public grants;

    event GrantCreated(address indexed beneficiary, uint256 amount, uint256 unlockTime);
    event GrantReverted(address indexed beneficiary, uint256 amount);
    event GrantClaimed(address indexed beneficiary, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyBeneficiary() {
        require(grants[msg.sender].exists, "No grant found");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createGrant(address _beneficiary, uint256 _unlockTime) external payable onlyOwner {
        require(msg.value > 0, "Grant must have value");
        require(_unlockTime > block.timestamp, "Unlock time must be in the future");

        grants[_beneficiary] = Grant(msg.value, _unlockTime, _beneficiary, true);
        emit GrantCreated(_beneficiary, msg.value, _unlockTime);
    }

    function revertGrant(address _beneficiary) external onlyOwner {
        require(grants[_beneficiary].exists, "Grant does not exist");
        require(block.timestamp < grants[_beneficiary].unlockTime, "Grant already unlocked");

        uint256 amount = grants[_beneficiary].amount;
        delete grants[_beneficiary];
        payable(owner).transfer(amount);

        emit GrantReverted(_beneficiary, amount);
    }

    function claimGrant() external onlyBeneficiary {
        require(block.timestamp >= grants[msg.sender].unlockTime, "Grant not yet unlocked");

        uint256 amount = grants[msg.sender].amount;
        delete grants[msg.sender];
        payable(msg.sender).transfer(amount);

        emit GrantClaimed(msg.sender, amount);
    }

    function getGrantInfo(address _beneficiary) external view returns (uint256, uint256, address) {
        Grant memory grant = grants[_beneficiary];
        require(grant.exists, "No grant found");
        return (grant.amount, grant.unlockTime, grant.beneficiary);
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function getTimeLeft(address _beneficiary) external view returns (uint256) {
        require(grants[_beneficiary].exists, "No grant found");
        if (block.timestamp >= grants[_beneficiary].unlockTime) {
            return 0;
        }
        return grants[_beneficiary].unlockTime - block.timestamp;
    }
}
