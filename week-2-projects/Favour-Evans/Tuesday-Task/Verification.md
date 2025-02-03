# Verifying Smart Contracts on Metis Blockchain Using Hardhat

## Overview
This document outlines the steps and tools required to verify smart contracts deployed via Hardhat on the Metis blockchain. Verification ensures the contract's source code is publicly accessible and matches the deployed bytecode, enhancing transparency and trust.

---

## Prerequisites
1. Hardhat Project Setup:
   - A project initialized with Hardhat (npx hardhat init).
   - Contract deployment script (e.g., deploy.js).
2. Metis Network Configuration:
   - Add Metis to hardhat.config.js (mainnet or testnet).
3. Explorer API Key:
   - Obtain an API key from [Metis Explorer](https://andromeda-explorer.metis.io/) (if required).

---

## Step-by-Step Guide

### 1. Install Required Packages
npm install --save-dev @nomicfoundation/hardhat-verify
### 2. Configure hardhat.config.js
Add the Metis network and verification settings:
require("@nomicfoundation/hardhat-verify");

module.exports = {
  networks: {
    metis: {
      url: "https://andromeda.metis.io/?owner=1088", // Mainnet RPC
      chainId: 1088,
      accounts: [process.env.PRIVATE_KEY], // Deployer wallet
    },
    metisTestnet: {
      url: "https://goerli.gateway.metisdevops.link", // Testnet RPC
      chainId: 599,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: {
      metis: process.env.METIS_API_KEY, // Optional (if required by Metis Explorer)
    },
    customChains: [
      {
        network: "metis",
        chainId: 1088,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan", // Verification API
          browserURL: "https://andromeda-explorer.metis.io/"
        }
      }
    ]
  }
};
### 3. Deploy the Contract
Run the deployment script:
npx hardhat run scripts/deploy.js --network metis
### 4. Verify the Contract
Use Hardhat's verify task with the deployed contract address and constructor arguments (if any):
npx hardhat verify --network metis <DEPLOYED_CONTRACT_ADDRESS> "<CONSTRUCTOR_ARGUMENTS>"
Example:
npx hardhat verify --network metis 0x1234...abcd "Hello Metis" 42
---

## Configuration Notes
- Constructor Arguments: Ensure arguments match the deployment inputs *exactly* (order and data types).
- Proxy Contracts: Use tools like hardhat-etherscan with OpenZeppelin upgrades plugin for proxy verification.
- Delay: Wait ~1-2 minutes after deployment before verifying (block finalization time).

---

## Troubleshooting
1. Verification Fails:
   - Confirm the contract is fully deployed and confirmed.
   - Check for typos in constructor arguments.
   - Use --force flag to re-submit:
    
     npx hardhat verify --force --network metis <ADDRESS> "<ARGS>"
     
2. API Errors:
   - Ensure the correct apiURL is used for Metis in hardhat.config.js.
3. Environment Variables:
   - Store private keys and API keys securely (e.g., .env file with dotenv).

---

## References
1. [Metis Documentation](https://docs.metis.io/)
2. [Hardhat Verification Plugin](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify)
3. [Metis Explorer](https://andromeda-explorer.metis.io/)
` 

