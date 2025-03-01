// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract GrantContract {
    address public owner;
    uint256 public totalGrants;

    struct Grant {
        address beneficiary;
        uint256 amount;
        uint256 releaseTime;
        bool isActive;
    }

    mapping(address => Grant) public grants;

    event GrantCreated(address indexed beneficiary, uint256 amount, uint256 releaseTime);
    event GrantReverted(address indexed beneficiary, uint256 amount);
    event GrantReleased(address indexed beneficiary, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyBeneficiary(address _beneficiary) {
        require(msg.sender == _beneficiary, "Only the beneficiary can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createGrant(address _beneficiary, uint256 _releaseTime) external payable onlyOwner {
        require(_beneficiary != address(0), "Invalid beneficiary address");
        require(msg.value > 0, "Grant amount must be greater than 0");
        require(grants[_beneficiary].amount == 0, "Grant already exists for this beneficiary");

        grants[_beneficiary] = Grant({
            beneficiary: _beneficiary,
            amount: msg.value,
            releaseTime: block.timestamp + _releaseTime,
            isActive: true
        });

        totalGrants += msg.value;
        emit GrantCreated(_beneficiary, msg.value, block.timestamp + _releaseTime);
    }

    function releaseGrant() external onlyBeneficiary(msg.sender) {
        Grant storage grant = grants[msg.sender];
        require(grant.isActive, "Grant is not active");
        require(block.timestamp >= grant.releaseTime, "Grant release time has not elapsed");

        uint256 amount = grant.amount;
        grant.isActive = false;
        payable(msg.sender).transfer(amount);

        emit GrantReleased(msg.sender, amount);
    }

    function revertGrant(address _beneficiary) external onlyOwner {
        Grant storage grant = grants[_beneficiary];
        require(grant.isActive, "Grant is not active");
        require(block.timestamp < grant.releaseTime, "Grant release time has already elapsed");

        uint256 amount = grant.amount;
        grant.isActive = false;
        payable(owner).transfer(amount);

        emit GrantReverted(_beneficiary, amount);
    }

    function getGrantInfo(address _beneficiary) external view returns (address, uint256, uint256, bool) {
        Grant memory grant = grants[_beneficiary];
        return (grant.beneficiary, grant.amount, grant.releaseTime, grant.isActive);
    }

    function getTotalBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function getTimeLeft(address _beneficiary) external view returns (uint256) {
        Grant memory grant = grants[_beneficiary];
        require(grant.isActive, "Grant is not active");
        if (block.timestamp >= grant.releaseTime) {
            return 0;
        } else {
            return grant.releaseTime - block.timestamp;
        }
    }
}
