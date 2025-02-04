# Research Smart Contract Verification

## Introduction

In this guide, we'll go through the steps and process in verifying Smart Contract and deployment via Hardhat on the Metis Blockchain Network.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn** (for dependency management)
- **Git** (optional but recommended)
- Basic knowledge of Solidity, Hardhat, and blockchain development

## Steps in Verify a Smart Contract

1. **Create a new folder and move into it** :

```shell
   mkdir my-project
   cd my-project
```

### 2. Install Hardhat and create a hardhat project:

1. **Create and move into a project folder** :

```shell
   npm init -y
```

1. **Install Hardhat:** :

```shell
   npm install --save-dev hardhat
```

1. **Create a Hardhat project** :

```shell
   npx hardhat
```

When prompted, select “Create an empty hardhat.config.js” or any other template you prefer. For this guild, I'll be going with "Create a Javascript Project"

---

### 3. Configure `hardhat.config.js`

Replace the content of `hardhat.config.js` with:

```
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  networks: {
    metis: {
      url: "https://goerli.gateway.metisdevops.link",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 599,
    },
  },
  solidity: "0.8.18",
};

```

---

### 4. Configure .env File for Private Key and RPC URL:

**.** Install the dotenv package

```
npm install dotenv
```

Create a file named `.env` in your root directory and add the following contents:

```
PRIVATE_KEY=your_private_key_here
RPC_URL=https://sepolia.metisdevops.link
```

---

### 6. Compile and Deploy Your Contract:

```
npx hardhat compile
```

```
npx hardhat run scripts/deploy.js --network metisSepolia
```

---

### 7. Verifying Your Contract

To verify your contract on the Metis Testnet, follow these steps:

```
npm install --save-dev @nomicfoundation/hardhat-verify
npm install --save-dev @nomicfoundation/hardhat-verify

```

### **3. Get a Metis Etherscan API Key**

1. Go to [Metis Testnet Explorer]()
2. Sign up and get an API key.
3. Store the key in your `.env` file:

   ```
   METIS_ETHERSCAN_API_KEY=your_api_key_here
   ```

   Once deployed, you'll see the hash in your terminal

---

### 8. Reference

For more info, visit the official Metis Github repository: [Metis Hardhat Deployment](https://github.com/metis-edu/Deploy-Smart-Contract-Hardhat-)
