const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GrantContractModule", (m) => {
  // Deploy the GrantContract
  const grantContract = m.contract("GrantContract");

  // Return the deployed contract for use in other modules or tests
  return { grantContract };
});
