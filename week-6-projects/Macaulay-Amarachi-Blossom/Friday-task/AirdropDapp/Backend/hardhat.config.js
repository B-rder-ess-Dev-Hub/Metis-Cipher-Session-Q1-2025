require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const METIS_SEPOLIA_RPC_URL = process.env.METIS_SEPOLIA_RPC_URL;

module.exports = {
    solidity: "0.8.28",
    networks: {
        metis_sepolia: {
            url: METIS_SEPOLIA_RPC_URL,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
            chainId: 59902,
        },
    },
    etherscan: {
        apiKey: {
            metis_sepolia: "placeholder-string",
        },
        customChains: [
            {
                network: "metis_sepolia",
                chainId: 59902,
                urls: {
                    apiURL: "https://sepolia-explorer-api.metisdevops.link/api",
                    browserURL: "https://sepolia-explorer.metisdevops.link",
                },
            },
        ],  
    },
};