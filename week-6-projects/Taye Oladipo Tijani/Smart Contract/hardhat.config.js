require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const METIS_SEPOLIA_RPC_URL = process.env.METIS_SEPOLIA_RPC_URL; 
const METIS_MAINNET_RPC_URL = process.env.METIS_MAINNET_RPC_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    metisSepolia: {
      url: METIS_SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 59902,
    },
    metisMainnet: {
      url: METIS_MAINNET_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 1088,
    },
  },
  ignition: {
    modulePath: "ignition/modules",  // 👈 Add this to fix the error
  },
};
