const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting Smart Contract", function () {
    let VotingContractFactory, voting;
    let owner, addr1, addr2;

    beforeEach(async function () {
        // Get signers
        [owner, addr1, addr2] = await ethers.getSigners();

        // Deploy the contract
        VotingContractFactory = await ethers.getContractFactory("VotingContract");
        voting = await VotingContractFactory.deploy(owner.address); // Pass constructor argument

        await voting.waitForDeployment(); // Use this instead of voting.deployed()
    });

    it("Should deploy the contract and initialize correctly", async function () {
        expect(await voting.chiefElectoralOfficer()).to.equal(owner.address);
    });
});
