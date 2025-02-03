# Research Smart Contract Verification

# How to verify smart contracts deployed via Hardhat on the Metis blockchain

When you deploy a smart contract to A blockchain, what is available is the byte code. To verify and publish your smart contract is to make the source code available on the blockchain for everyone to see, this helps you to gain trust from investors and users.

Here is a step-by-step guide to follow

## 1. Install the Plugin

If you haven't already, install the **hardhat-verify** plugin in your project:

```bash
npm install --save-dev @nomiclabs/hardhat-verify
```

## 2. Configure Hardhat

In your hardhat.config.js or hardhat.config.ts file, require the plugin and add the Metis network configuration. Since Metis doesn't require an API key for verification, you can use any non-empty string as a placeholder:

Modify your **hardhat.config.js** file:

```javascript
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-verify");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const METIS_SEPOLIA_RPC_URL = process.env.METIS_SEPOLIA_RPC_URL;

module.exports = {
  solidity: "0.8.28",
  networks: {
    metisSepolia: {
      url: METIS_SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 59902,
    },
  },
  etherscan: {
    apiKey: {
      metisSepolia: "any-non-empty-string",
    },
    customChains: [
      {
        network: "metisSepolia",
        chainId: 59902,
        urls: {
          apiURL: "https://sepolia-explorer-api.metisdevops.link/api",
          browserURL: "https://sepolia-explorer.metisdevops.link",
        },
      },
    ],
  },
};
```

---

# For Both Testnet (Sepolia) and Mainnet (Andromeda)

## Hardhat Configuration

```typescript
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "berlin",
      metadata: {
        bytecodeHash: "none",
      },
    },
  },
  networks: {
    "metis-sepolia": {
      url: "https://sepolia.metisdevops.link/",
    },
    andromeda: {
      url: "https://andromeda.metis.io/?owner=1088",
    },
  },
  etherscan: {
    apiKey: {
      "metis-sepolia": "apiKey is not required, just set a placeholder",
      "metis-goerli": "apiKey is not required, just set a placeholder",
      andromeda: "apiKey is not required, just set a placeholder",
    },
    customChains: [
      {
        network: "andromeda",
        chainId: 1088,
        urls: {
          apiURL:
            "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan",
          browserURL: "https://explorer.metis.io",
        },
      },
      {
        network: "metis-sepolia",
        chainId: 59902,
        urls: {
          apiURL: "https://sepolia-explorer-api.metisdevops.link/api",
          browserURL: "https://sepolia-explorer.metisdevops.link",
        },
      },
    ],
  },
};
```

---

# Deploy Your Contracts

## Deploy and Verify in One Step Using `Hardhat Ignition`

Run the following command to deploy and verify the contract:

```bash
npx hardhat ignition deploy ./ignition/modules/Lock.js --network metisSepolia --verify
```

## Example Output:

```bash
✔ Confirm deploy to network metisSepolia (59902)? … yes
Hardhat Ignition 🚀

Deploying [ LockModule ]

Batch #1
  Executed LockModule#Lock

[ LockModule ] successfully deployed 🚀

Deployed Addresses

LockModule#Lock - 0x72EE8599D070000a555c7ba874DBc24EFA67f23e
```

### Verification Process

```bash
- Verifying deployed contracts

- Verifying contract "contracts/Lock.sol:Lock" for network metisSepolia...
Successfully verified contract "contracts/Lock.sol:Lock" for network metisSepolia:
  - [View on Metis Sepolia Explorer](https://sepolia-explorer-api.metisdevops.link/address/0x72EE8599D070000a555c7ba874DBc24EFA67f23e#code)
```
