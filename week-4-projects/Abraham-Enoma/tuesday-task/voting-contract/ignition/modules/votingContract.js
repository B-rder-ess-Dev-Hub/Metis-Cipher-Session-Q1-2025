const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VoteModule", (m) => {
  const votingContract = m.contract("VotingSystem", []);

  return { votingContract };
});
