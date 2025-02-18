const hre = require("hardhat");

async function main() {
    const contractAddress = "0xCbBC75BCaB7cF020Bf49940BB4BA8b8040614e5b";
    const admins = ["0xE2dd7e08DD99870fcB75331AC1bb08De094B3570"];
    const electionDuration = 259200;

    try {
        await hre.run("verify:verify", {
            address: contractAddress,
            constructorArguments: [admins, electionDuration],
        });

        console.log(`✅ Contract verified successfully: ${contractAddress}`);
    } catch (error) {
        console.error("❌ Verification failed:", error.message);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
