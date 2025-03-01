// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

contract GrantContract {
    address public owner;
    mapping(address => uint256) public grants;
    mapping(address => uint256) public grantReleaseTimes;


    event GrantCreated(address indexed beneficiary, uint256 amount, uint256 releaseTime);
    event GrantReverted(address indexed beneficiary, uint256 amount);
    event GrantReleased(address indexed beneficiary, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }


    constructor() {
        owner = msg.sender;
    }

    function createGrant(address beneficiary, uint256 releaseTime) external payable onlyOwner {
        require(beneficiary != address(0), "Invalid beneficiary address");
        require(msg.value > 0, "Grant amount must be greater than 0");
        require(releaseTime > block.timestamp, "Release time must be in the future");

        grants[beneficiary] += msg.value;
        grantReleaseTimes[beneficiary] = releaseTime;

        emit GrantCreated(beneficiary, msg.value, releaseTime);
    }

    function revertGrant(address beneficiary) external onlyOwner {
        require(grants[beneficiary] > 0, "No grant found for this beneficiary");
        require(block.timestamp < grantReleaseTimes[beneficiary], "Grant has already been released");

        uint256 amount = grants[beneficiary];
        grants[beneficiary] = 0;
        grantReleaseTimes[beneficiary] = 0;

        payable(owner).transfer(amount);

        emit GrantReverted(beneficiary, amount);
    }

    function releaseGrant() external {
        require(grants[msg.sender] > 0, "No grant found for this address");
        require(block.timestamp >= grantReleaseTimes[msg.sender], "Grant release time has not elapsed");

        uint256 amount = grants[msg.sender];
        grants[msg.sender] = 0;
        grantReleaseTimes[msg.sender] = 0;

        payable(msg.sender).transfer(amount);

        emit GrantReleased(msg.sender, amount);
    }

    function getGrantInfo(address beneficiary) external view returns (uint256 amount, uint256 releaseTime) {
        return (grants[beneficiary], grantReleaseTimes[beneficiary]);
    }

    function getTotalBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function getTimeLeft(address beneficiary) external view returns (uint256) {
        require(grantReleaseTimes[beneficiary] > 0, "No grant found for this beneficiary");
        return grantReleaseTimes[beneficiary] - block.timestamp;
    }
}