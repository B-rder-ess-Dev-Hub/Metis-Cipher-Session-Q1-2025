# **How to Verify a Smart Contract with Hardhat on Metis Testnet**  

To "verify a smart contract" means to publicly publish the source code of a smart contract on a blockchain explorer, allowing anyone to inspect and compare it to the deployed bytecode on the blockchain, essentially confirming that the code running on the network matches the code developers originally wrote and intended to be used. Here are the steps I used to verify the `Lock` smart contract on the metis Testnet.
  
---

- Configure `hardhat.config.js` with private key and metis sepolia url.
- Set `.env` values for necessary values.
- Compile the contract
  - `npx hardhat compile`
- Deploy Your contract
  - `npx hardhat run scripts/deploy.js --network metis_testnet`
- Copy Contract address.
- Go to [Verify Contract Page](https://sepolia-explorer.metisdevops.link/contract-verification) on the metis block explorer
- Enter the following fields
  - Contract Address
  - License type
  - Verification method - `Solidity (Flattened source code)`
  - Specify compiler version - `0.8.28`
  - Copy and paste Contract code into form
  - Then click `Verify and Publish`
