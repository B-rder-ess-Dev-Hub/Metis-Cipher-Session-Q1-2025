const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GrantModule", (m) => {
  const grantContract = m.contract("GrantContract", []);

  return { grantContract };
});
