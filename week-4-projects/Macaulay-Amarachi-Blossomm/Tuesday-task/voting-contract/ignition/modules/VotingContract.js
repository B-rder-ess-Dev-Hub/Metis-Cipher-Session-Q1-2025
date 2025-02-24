const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VotingContractModule", (m) => {
  
  const votingDurationInMinutes = 300;

  const votingContract = m.contract("VotingContract", [votingDurationInMinutes]);

  return { votingContract }
})