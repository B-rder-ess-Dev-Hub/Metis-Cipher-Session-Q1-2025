const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GrantContractModule", (m) => {
  
  const grantContract = m.contract("GrantContract");

  return { grantContract };
});