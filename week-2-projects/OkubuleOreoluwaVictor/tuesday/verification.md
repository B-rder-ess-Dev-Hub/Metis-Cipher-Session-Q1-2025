Verifying smart contracts deployed via Hardhat on the *Metis blockchain* involves making your contract's source code publicly available and verifying it on a block explorer like the [Metis Explorer](https://sepolia.explorer.metisdevops.link). Here's a way/process to verify contracts:

---

#1. Install Required Plugins*
To verify contracts,  the hardhat-etherscan plugin might be required.it can be Installed using:

bash
npm install --save-dev @nomiclabs/hardhat-etherscan


---
Get a Block Explorer API Key (if required)**
Some block explorers require an API key for verification. Check the [Metis Explorer](https://sepolia.explorer.metisdevops.link)



#2. Update of the  hardhat.config.js is required**
Addition of  the etherscan configuration to the  hardhat.config.js file. For Metis, it might be needed to specify the custom API URL for the Metis block explorer.

#Verify the Contract
Use the verify task provided by hardhat-etherscan to verify the contract. Run the following command on the terminal:

npx hardhat verify --network metisSepolia <DEPLOYED_CONTRACT_ADDRESS>
