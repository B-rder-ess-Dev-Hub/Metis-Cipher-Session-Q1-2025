# Research
#How to verify smart contracts deployed via Hardhat on the Metis blockchain.


To verify smart contracts deployed via Hardhat on the Metis blockchain, you can utilize the hardhat-verify plugin, which simplifies the verification process by interfacing with Etherscan-compatible APIs. Metis Explorer supports this method, allowing for seamless contract verification. Here's a step-by-step guide:

## Part One: Blockchain Use Cases in Various Industries

### 1.Install the hardhat-verify Plugin: In your Hardhat project directory, install the plugin by running.

### 2. Configure the Plugin: Update your hardhat.config.js or hardhat.config.ts file to include the plugin and set the necessary configurations.

Replace 'YOUR_PRIVATE_KEY' with your wallet's private key and 'YOUR_ETHERSCAN_API_KEY' with your Etherscan API key. Ensure you have an Etherscan API key; if not, you can obtain one by signing up on Etherscan's website.

### 3.Deploy Your Contract: Deploy your smart contract to the Metis network using Hardhat's deployment scripts. For example, create a deploy.js script in the scripts directory:

npx hardhat run scripts/deploy.js --network metis


### 4.Verify Your Contract: After deployment, verify your contract using the verify task provided by the plugin:

*npx hardhat verify --network metis DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1" "Constructor argument 2"*

Replace DEPLOYED_CONTRACT_ADDRESS with your contract's address and provide any constructor arguments if applicable.

By following these steps, your smart contract will be verified on the Metis Explorer, allowing users to view your source code and interact with your contract directly through the explorer. 




