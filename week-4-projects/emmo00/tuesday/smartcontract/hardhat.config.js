require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");

require("dotenv").config();

const { METIS_SEPOLIA_RPC_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    metis_testnet: {
      url: METIS_SEPOLIA_RPC_URL, // Metis Goerli Testnet RPC
      accounts: [PRIVATE_KEY], // Load from .env file
      chainId: 59902, // Metis Goerli Testnet Chain ID
    },
  },
};
