# Voting Smart Contract

## Overview
This project implements a secure and transparent **Voting Smart Contract** deployed on the Metis blockchain. The contract ensures fair elections with role-based access control, unique voter verification, and emergency security features.

## Features
- **Unique NIN Check**: Uses hashing to ensure each voter's NIN is unique and case-sensitive.
- **Role-Based Access Control**:
  - Chief Electoral Officer (CEO)
  - Electoral Officer 1-5
- **Multi-Signature Admin Control**: Changes require approval from at least three admins.
- **Admin Removal**: Only the Chief Electoral Officer can remove other admins.
- **Emergency Stop Feature**: Allows pausing elections in case of fraud.
- **Contestant Registration**: Candidates must register at least one week before the election.
- **Voting Period**: Admins set the start and end dates, with a maximum duration of 24 hours.

## Smart Contract Details
- **Solidity Version**: `0.8.28`
- **Network**: Metis Sepolia Testnet 
- **Deployment Framework**: Hardhat with Hardhat Ignition
- **Dependencies**:
  - `@nomicfoundation/hardhat-toolbox`
  - `@nomicfoundation/hardhat-ignition`
  - `dotenv`
  - `chai`, `mocha`, `ethers` for testing

## Deployment
### Prerequisites
Ensure you have **Node.js** and **Hardhat** installed.

```sh
npm install
```

Set up a `.env` file with:
```sh
PRIVATE_KEY=<your-private-key>
METIS_SEPOLIA_RPC_URL=<your-rpc-url>
```

### Deploying the Contract
Run the following command to deploy the contract:
```sh
npx hardhat ignition deploy --network metisSepolia
```

### Verifying the Contract
After deployment, verify the contract on the blockchain explorer:
```sh
npx hardhat verify --network metisSepolia <contract_address>
```

## Testing
Run the test cases using Mocha & Chai


## Ignition Module File
The `ignition/modules/VotingContract.js` file contains the deployment logic:

## Hardhat Configuration
The `hardhat.config.js` file is configured for Metis Sepolia Testnet:


## Notes
- Ensure the **Metis Sepolia** faucet funds your account before deployment.
- Use a valid Ethereum address when setting up the **Chief Electoral Officer**.
- Keep the **PRIVATE_KEY** secure and do not expose it in public repositories.

## Future Improvements
- Enhance the contract with more security features.
- Extend functionality for additional election criteria.
- Implement a frontend interface for user interaction.

---
**Author**: Taye Oladipo Tijani

**License**: MIT

---
### Difference Between Overflow and Underflow in Solidity

In Solidity, **overflow** and **underflow** occur when arithmetic operations exceed the fixed storage capacity of a variable type.

1. **Overflow** happens when a number exceeds the maximum value a data type can hold, causing it to wrap around to the minimum value.  
   - Example: If `uint8` (which can hold values from 0 to 255) exceeds 255, it wraps around to 0.

2. **Underflow** occurs when a number goes below the minimum value a data type can store, wrapping around to the maximum value.  
   - Example: If `uint8` tries to go below 0, it wraps around to 255.

**Solidity 0.8+ automatically prevents overflow and underflow** by reverting the transaction, unless explicitly handled using `unchecked` blocks.

