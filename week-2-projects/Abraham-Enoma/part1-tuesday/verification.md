# Smart Contract Verification on Metis

## Introduction

This guide explains how to verify smart contracts deployed via Hardhat on the Metis blockchain.

## Prerequisites

- Node.js installed (v14 or later)
- npm or yarn (for dependency management)
- Git
- Hardhat installed
- Private key for deployment

## Steps to Verify a Smart Contract

1. Create a new project folder and move into it:

```bash
mkdir my-project
cd my-project
```

### 2. Install Hardhat and create a hardhat project:

```bash
npm init -y
npm install --save-dev hardhat
npx hardhat
```

When prompted, select a template that you prefer to use. For this guide I chose "Create a Javascript Project"

### 3. Configure `hardhat.config.js`

Add the following configurations to deploy your contract on Metis Sepolia testnet:

```javascript
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
 const METIS_SEPOLIA_RPC_URL = process.env.RPC_URL; // Replace this with the Metis Sepolia RPC URL

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

```

### 4. Configure .env File for Private Key and RPC URL:

- Install the dotenv package to handle environment variables:

```bash
npm install dotenv
```

- Create a file named `.env` in your root directory and add the following contents:

```
PRIVATE_KEY=your_private_key
RPC_URL=https://sepolia.metisdevops.link
```

Replace your_private_key with your wallet's private key and RPC_URL with the RPC endpoint of your chosen network.

### 5. Ensure the `.env` file is ignored by Git by adding it to your .gitignore file:

```
.env
```

### 6. Compile and Deploy Your Contract:

- To compile your contract:
  Run:

```
  npx hardhat compile
```

- To deploy your contract:
  Run:

```bash
npx hardhat run scripts/deploy.js --network metisSepolia
```

### 7. Verify Your Contract

Once a contract is deployed, you should see the transaction hash in your terminal. Copy it and paste it on a block explorer to verify the deployment.

### 8. Reference

For more details, refer to the official Metis GitHub: [Metis Hardhat Deployment](https://github.com/metis-edu/Deploy-Smart-Contract-Hardhat)

---

This guide helps ensure your smart contracts are successfully verified on Metis using Hardhat.
