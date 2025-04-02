const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

const AirdropModule = buildModule("AirdropModule", (m) => {
  // Convert Merkle Root to a proper bytes32 format
  const merkleRoot = "0xccaf01c0b2d04108b0234045f9fcbd1bea16645f57d148e2b6da72cb954f8bdd";

  // Deploy the Airdrop contract with the Merkle Root
  const airdrop = m.contract("Airdrop", [merkleRoot]);

  return { airdrop };
});

module.exports = AirdropModule;
