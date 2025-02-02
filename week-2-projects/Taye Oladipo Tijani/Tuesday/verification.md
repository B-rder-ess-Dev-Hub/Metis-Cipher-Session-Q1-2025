# Smart Contract Verification on Metis using Hardhat

Verifying smart contracts deployed via Hardhat on the Metis blockchain is essential for transparency and trust. This process involves publishing your contract's source code and metadata, allowing others to review and interact with it confidently.

## 1. Set Up Your Hardhat Project

Begin by setting up a Hardhat project if you haven't already:

```bash
mkdir my-project
cd my-project
npm init -y
npm install --save-dev hardhat
npx hardhat init
```

This sequence initializes a new Hardhat project in the `my-project` directory.

## 2. Configure the Metis Network

Update your `hardhat.config.js` or `hardhat.config.ts` to include the Metis network configuration:

```javascript
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.0",
  networks: {
    metis: {
      url: "https://andromeda.metis.io/?owner=1088",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.METIS_ETHERSCAN_API_KEY,
  },
};
```

Ensure you've installed the necessary plugins:

```bash
npm install --save-dev @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan
```

Replace `process.env.PRIVATE_KEY` with your wallet's private key and `process.env.METIS_ETHERSCAN_API_KEY` with your Metis Explorer API key. Storing these in environment variables is recommended for security.

## 3. Deploy Your Smart Contract

Create a deployment script (e.g., `scripts/deploy.js`):

```javascript
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory("YourContract");
  const token = await Token.deploy();

  console.log("Contract deployed to address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Run the deployment script:

```bash
npx hardhat run scripts/deploy.js --network metis
```

## 4. Verify Your Smart Contract

After deployment, verify your contract using Hardhat's verification plugin:

```bash
npx hardhat verify --network metis DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1" "Constructor argument 2"
```

Replace `DEPLOYED_CONTRACT_ADDRESS` with your contract's address and provide any constructor arguments if applicable.

For detailed instructions, refer to the Metis Explorer documentation on Hardhat verification: [Metis Explorer Docs](https://explorer.metis.io/documentation/recipes/hardhat-verification)

By following these steps, you can successfully verify your smart contracts on the Metis blockchain, enhancing their transparency and reliability.

For a visual walkthrough, you might find this video helpful: [Deploying on Metis L2](https://www.youtube.com/watch?v=h05-TkWPCvA)