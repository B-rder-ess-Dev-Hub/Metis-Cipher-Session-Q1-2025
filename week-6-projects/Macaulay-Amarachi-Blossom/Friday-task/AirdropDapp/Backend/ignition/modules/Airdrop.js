const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { parseUnits } = require("ethers");

module.exports = buildModule("AirdropModule", (m) => {
  const ozelTokenAddress = m.getParameter("ozelTokenAddress", "0xBA33f97A8A42cFD0d50362476FFAc143401d990a");

  const merkleRoot = m.getParameter("merkleRoot", "0x626be3932c235a89911f4db474a42f328c19773822eb7700fa30aabb4efb430b");

  const claimAmount = m.getParameter("claimAmount", parseUnits("1", 6));

  const airdrop = m.contract("Airdrop", [ozelTokenAddress, merkleRoot, claimAmount]);

  return { airdrop };
});