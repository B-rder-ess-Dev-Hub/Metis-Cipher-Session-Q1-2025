# Part 3: Research Smart Contract Verification

---

## My Documentation on the Research I Conducted on Smart Contract Verification

Verifying smart contracts on the Metis Explorer (or any blockchain explorer) is an essential step to ensure transparency and allow users to interact with your contract confidently. Below is a detailed guide on how to verify smart contracts on the Metis blockchain using Hardhat and the Metis Explorer.

---

### Step 1: Prerequisites
Before verifying your smart contract, ensure you have:
1. Deployed your contract to the Metis blockchain (e.g., Metis Sepolia Testnet or Metis Andromeda Mainnet).
2. The contract address and constructor arguments used during deployment.
3. The source code of your smart contract (Solidity file).
4. A Metis API key (if required by the explorer).

---

### Step 2: Verify Using Hardhat
Hardhat simplifies the verification process with its built-in verify task. Here's how to use it:

#### 1. Install Required Plugins
Ensure you have the @nomicfoundation/hardhat-verify plugin installed:
npm install --save-dev @nomicfoundation/hardhat-verify
#### 2. Configure Hardhat
Update your hardhat.config.js or hardhat.config.ts file to include the Metis network and verification settings:
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    metis_sepolia: {
      url: process.env.METIS_SEPOLIA_RPC_URL, // Metis Sepolia RPC URL
      accounts: [process.env.PRIVATE_KEY], // Your private key
    },
  },
  etherscan: {
    apiKey: {
      metis_sepolia: process.env.METIS_API_KEY, // Metis API key (if required)
    },
    customChains: [
      {
        network: "metis_sepolia",
        chainId: 59902, // Metis Sepolia chain ID
        urls: {
          apiURL: "https://api-sepolia.explorer.metis.io/api", // Metis Sepolia API URL
          browserURL: "https://sepolia.explorer.metis.io", // Metis Sepolia Explorer URL
        },
      },
    ],
  },
};
#### 3. Add Environment Variables
Create a .env file in your project root and add the following:
PRIVATE_KEY=your_private_key_here
METIS_SEPOLIA_RPC_URL=https://metis-sepolia-rpc.publicnode.com
METIS_API_KEY=your_metis_api_key_here
#### 4. Run the Verification Command
Use Hardhat’s verify task to verify your contract:
npx hardhat verify --network metis_sepolia <contract_address> <constructor_arguments>
- Replace <contract_address> with the address of your deployed contract.
- Replace <constructor_arguments> with the arguments passed to the constructor (if any).

Example:
npx hardhat verify --network metis_sepolia 0x1234567890abcdef "Hello, Metis!"
#### 5. Check the Output
If successful, you’ll see a message like:
Successfully submitted source code for contract Lock at 0x1234567890abcdef.
---

### Step 3: Verify Manually on Metis Explorer
If you prefer to verify your contract manually, follow these steps:

#### 1. Visit the Metis Explorer
- For Metis Sepolia Testnet: [https://sepolia.explorer.metis.io](https://sepolia.explorer.metis.io)
- For Metis Andromeda Mainnet: [https://andromeda-explorer.metis.io](https://andromeda-explorer.metis.io)

#### 2. Search for Your Contract
- Enter your contract address in the search bar and press Enter.

#### 3. Click "Verify and Publish"
- Navigate to the contract page and on the contract page, click the Verify and Publish button.

#### 4. Fill in the Verification Form
- Contract Address: Automatically populated.
- Compiler Type: Select Solidity (Single file) or Solidity (Standard JSON Input).
- Compiler Version: Match the version used to compile your contract (e.g., v0.8.20).
- Open Source License Type: Choose the appropriate license (e.g., MIT).
- Constructor Arguments: Provide the ABI-encoded constructor arguments (if any).
- Contract Code: Paste your Solidity source code.

#### 5. Submit and Verify
- Click Verify and Publish.
- If successful, the contract will be marked as Verified on the explorer.

---

### Important Points To Consider:

### Only verified contracts are trustworthy:
Verifying a contract is crucial for assessing its security and functionality, as it allows users to review the code and ensure it aligns with the intended behavior.

### Check for verification status:
Once verified, the contract page on Metis Explorer will display a verification badge indicating that the source code has been reviewed.
