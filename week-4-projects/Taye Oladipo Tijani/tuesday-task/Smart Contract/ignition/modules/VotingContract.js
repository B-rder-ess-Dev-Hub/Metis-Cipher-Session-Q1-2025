const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VotingContractModule", (m) => {
    // Ensure we have a valid deployer account
    if (!m.getAccount(0)) {
        throw new Error("No valid deployer account found. Ensure Hardhat is configured correctly.");
    }

    // Get the first account as the Chief Electoral Officer
    const chiefElectoralOfficer = m.getAccount(0);

    // Deploy the VotingContract with the Chief Electoral Officer address
    const votingContract = m.contract("VotingContract", [chiefElectoralOfficer]);

    return { votingContract };
});
