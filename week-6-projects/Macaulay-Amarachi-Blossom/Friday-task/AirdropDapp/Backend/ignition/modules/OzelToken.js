const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("OzelTokenModule", (m) =>
{
  const initialSupply = m.getParameter
  ("initialSupply", 1000000);

  const ozelToken = m.contract("OzelToken", [initialSupply]);

  return { ozelToken };
})