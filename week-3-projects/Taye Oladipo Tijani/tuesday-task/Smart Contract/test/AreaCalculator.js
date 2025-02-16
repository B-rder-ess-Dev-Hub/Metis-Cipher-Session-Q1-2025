const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("AreaCalculator", function () {
  let AreaCalculator;
  let areaCalculator;

  before(async function () {
    AreaCalculator = await ethers.getContractFactory("AreaCalculator");
    areaCalculator = await AreaCalculator.deploy();  // Deploy manually
    await areaCalculator.waitForDeployment(); // Ensure it's deployed
  });

  it("Should return correct triangle area", async function () {
    const base = 10;
    const height = 5;
    const expectedArea = (base * height) / 2;

    const result = await areaCalculator.calculateTriangleArea(base, height);
    expect(result).to.equal(expectedArea);
  });
});
