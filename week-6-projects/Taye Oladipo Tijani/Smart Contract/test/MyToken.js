const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
    let MyToken, myToken, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        MyToken = await ethers.getContractFactory("MyToken");
        myToken = await MyToken.deploy();  // No need for deployed()
    });

    it("Should assign the total supply to the owner", async function () {
        const ownerBalance = await myToken.balanceOf(owner.address);
        expect(await myToken.totalSupply()).to.equal(ownerBalance);
    });

    it("Should transfer tokens between accounts", async function () {
        await myToken.transfer(addr1.address, 50);
        expect(await myToken.balanceOf(addr1.address)).to.equal(50);
    });

    it("Should fail if sender does not have enough balance", async function () {
        await expect(myToken.connect(addr1).transfer(addr2.address, 50)).to.be.reverted;

    });

    it("Should approve and allow spending of tokens", async function () {
        await myToken.approve(addr1.address, 100);
        expect(await myToken.allowance(owner.address, addr1.address)).to.equal(100);
    });

    it("Should transfer tokens using transferFrom", async function () {
        await myToken.approve(addr1.address, 100);
        await myToken.connect(addr1).transferFrom(owner.address, addr2.address, 50);
        expect(await myToken.balanceOf(addr2.address)).to.equal(50);
    });
});
