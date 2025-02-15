const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VotingContractModule", (m) => {
  const admin1 = m.getAccount(0);

  const electionDuration = 259200;
  const votingContract = m.contract("VotingContract", [
    [admin1],
    electionDuration,
  ]);

  return { votingContract };
});
