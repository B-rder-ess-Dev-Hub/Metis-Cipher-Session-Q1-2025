# MyToken Airdrop Project

## Project Task
This project involves creating an ERC-20 token, generating a Merkle Tree for whitelist verification, and implementing an airdrop contract. The goal is to allow users to claim tokens if they are part of the whitelist.

## Implementation

### Part One: ERC-20 Token Contract
- Implemented an ERC-20 token contract `MyToken.sol` using OpenZeppelin libraries.
- Features include minting and transferring functionalities.
- The contract was deployed to the Sepolia testnet.

### Part Two: Merkle Tree Generation
- A whitelist of eligible addresses was created.
- Used `merkletreejs` and `keccak256` to generate a Merkle Tree.
- The root of the tree was stored in the airdrop contract for verification.

### Part Three: Airdrop Contract
- Developed an airdrop smart contract allowing eligible users to claim tokens.
- Implemented Merkle Proof verification to check whitelist eligibility.
- Users submit a proof to claim their tokens.

## Deployed Contracts
- **ERC-20 Token Contract:** [Sepolia Explorer Link](https://sepolia-explorer.metisdevops.link/address/0x62270587bcab285D233693B75C73EBB4e7ED2e85)
- **Airdrop Contract:** [Sepolia Explorer Link](https://sepolia-explorer.metisdevops.link/address/0x541337D10C9918193Da502598C2D05c93f76c200?tab=txs)

- **Airdrop.sol contract address:** 0x541337D10C9918193Da502598C2D05c93f76c200 
- **MyToken.sol contract address:** 0x62270587bcab285D233693B75C73EBB4e7ED2e85

## Deployed Frontend
- Hosted on React: [Frontend Link](http:localhost:5173)

## Screenshots
### Contract Deployments and Transactions
- Screenshot of ERC-20 deployment.
- Screenshot of Airdrop contract deployment.
- Screenshot of transactions confirming successful claims.

### Frontend
- Screenshot of the claim interface.
- Screenshot of successful claim transaction.

---
This README provides an overview of the project, its implementation, deployed contract links, frontend URL, and proof of execution.

