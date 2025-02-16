require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const METIS_SEPOLIA_RPC_URL = process.env.METIS_SEPOLIA_RPC_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    metis_testnet: {
      url: METIS_SEPOLIA_RPC_URL, // Metis Goerli Testnet RPC
      accounts: [PRIVATE_KEY], // Load from .env file
      chainId: 59902, // Metis Goerli Testnet Chain ID
    },
  },
};
