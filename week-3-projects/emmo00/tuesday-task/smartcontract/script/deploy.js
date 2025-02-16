const hre = require("hardhat");

async function main() {
    const AreaCalculator = await hre.ethers.getContractFactory("AreaCalculator");
    const areaCalculator = await AreaCalculator.deploy();

    await areaCalculator.waitForDeployment();

    console.log("AreaCalculator contract deployed to:", await areaCalculator.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });