# Week 2(Tuesday) Tasks

## Part 3: Research Smart Contract Verification

**A Research on  Smart Contract Verification. Below are the findings:**

To verify a smart contract deployed via Hardhat on the Metis blockchain, follow these steps:  

### **Step 1: Install Dependencies**  
Ensure your Hardhat project has the necessary dependencies installed:  

```bash
npm install --save-dev @nomicfoundation/hardhat-verify
```

### **Step 2: Configure Hardhat for Metis**  
Modify your `hardhat.config.js` or `hardhat.config.ts` to include Metis network settings and the Etherscan plugin;  (let's use Javascript for example):

```javascript
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: "0.8.18",
  networks: {
    metis: {
      url: "https://andromeda.metis.io/?owner=1088",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      metis: process.env.METISSCAN_API_KEY,
    },
    customChains: [
      {
        network: "metis",
        chainId: 1088,
        urls: {
          apiURL: "https://andromeda-explorer.metis.io/api",
          browserURL: "https://andromeda-explorer.metis.io/"
        }
      }
    ]
  }
};
```
Ensure `PRIVATE_KEY` and `METISSCAN_API_KEY` are set in your `.env` file. 

**P.S:** Remember to add your .env  to gitignore to avoid pushing your private key to Github repo as it can be risky and your transactions tampered with.

### **Step 3: Deploy Your Smart Contract**  
Use Hardhat to deploy your contract to the Metis blockchain:  

```bash
npx hardhat run scripts/deploy.js --network metis
```
--Note that the deploy.js can  be any file, yours can be lock.js.
--The network can also be any network, our example was metis network


### **Step 4: Verify the Smart Contract**  
Once deployed, obtain the contract address and verify it using:  

```bash
npx hardhat verify --network metis <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGUMENTS>
```

If the contract requires constructor arguments, encode them using Hardhat’s helper script:  

```bash
npx hardhat verify --constructor-args scripts/args.js --network metis <CONTRACT_ADDRESS>
```

### **Step 5: Confirm Verification on Metis Explorer**  
Visit [Metis Andromeda Explorer](https://andromeda-explorer.metis.io/) and check the contract’s verification status.



### **Summary of Findings**  

- **Hardhat’s `@nomicfoundation/hardhat-verify` plugin** is used for verification.  

- **Metis network settings** must be configured with a valid RPC URL and API keys.  

- **Deployment is done using Hardhat’s CLI**, ensuring the contract is pushed to the Metis blockchain.  

- **Verification requires providing constructor arguments** if applicable.  

- **Once verified, the contract is accessible on Metis Explorer**, allowing users to interact with it transparently.  

