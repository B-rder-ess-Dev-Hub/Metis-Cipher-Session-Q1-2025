// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ADMIN_ADDRESSES = ["0xF2aE212BfC755508a088bfADc985Db391bBFDec8", "0xfb1573907b4c47A1e367C887Eb7bbB20069963fb", "0x50e20E505b173e94A4337F324434eF48AAF2bC7F", "0x022792c5bFBfA056b80D38c6B672d6e2918e8673", "0x1e7d0d69e047D4Df5996D5382E67485161b33855"];
const ELECTION_DURATION = 64800; // 18 hours from deployment time

module.exports = buildModule("VotingContractModule", (m) => {
  const votingContract = m.contract("VotingContract", [ADMIN_ADDRESSES, ELECTION_DURATION]);

  return { votingContract };
});
