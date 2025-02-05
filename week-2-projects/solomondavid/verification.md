## How to Verify Smart Contracts Deployed via Hardhat on Metis

#### 1. Install the Hardhat verification Plugin
Run the following code 
`npm install --save-dev @nomicfoundation/hardhat-verify`
Then require the following in your hardhat.config.js
`require("@nomicfoundation/hardhat-verify");`

#### 2. Get API Key from Metis Explorer
This key will be stored in your .env file
`METISSCAN_API_KEY=your_api_key_here`

### 3. Configure hardhat.config.js
```
module.exports = {
  solidity: "0.8.20",
  networks: {
    metis: {
      url: "https://sepolia.metisdevops.link", // Use Andromeda URL for Mainnet
      chainId: 599, // Use 1088 for Metis Mainnet
      accounts: [process.env.PRIVATE_KEY], // Private key for deployment
    },
  },
  etherscan: {
    apiKey: {
      metis: process.env.METISSCAN_API_KEY,
    },
    customChains: [
      {
        network: "metis",
        chainId: 599, // Use 1088 for Andromeda
        urls: {
          apiURL: "https://api-sepolia.explorer.metisdevops.link/api",
          browserURL: "https://sepolia.explorer.metisdevops.link",
        },
      },
    ],
  },
};
```

### 4. Verify the Contract 
Note that you must deploy the contract first. 
Verify it using this code. 
`npx hardhat verify --network metis DEPLOYED_CONTRACT_ADDRESS`

### 5. Check the Metis Explorer. 
Check the Metis explorer for Sepolia, Startdust, or Andromeda.

