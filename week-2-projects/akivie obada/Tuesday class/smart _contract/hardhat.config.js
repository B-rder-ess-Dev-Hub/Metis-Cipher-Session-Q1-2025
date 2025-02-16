require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

const PRIVATE_KEY = "c51ba6cb429153e620deaa2637c710bf18d68882b5b23051cb1f5e7ece088199";
const METIS_SEPOLIA_RPC_URL = "https://sepolia.metisdevops.link"; // Replace this with the Metis Sepolia RPC URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",

   networks: {
    metisSepolia: {
      url: METIS_SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 59902,
    },
  },
};
