# Grant Contract: Documentation

This document provides a quick guide to deploying and interacting with the GrantContract smart contract, which allows an owner to create, revert, and release grants for beneficiaries.

## Contract Overview

The GrantContract enables:

- Grant Creation: Owner creates grants with a release time.
- Grant Reversion: Owner reverts grants before release.
- Grant Release: Beneficiaries access grants after release time.
- Grant Info: Retrieve grant details, total balance, and time left.

## Contract Address

This is the verified grant contract address [link](https://sepolia-explorer.metisdevops.link/address/0x79b7d0636544c9456D37A271031aED7cce80DFC8).

## Deployment Steps

1. Set Up Hardhat:

Bash

npx hardhat
npm install @nomicfoundation/hardhat-ignition @nomicfoundation/hardhat-toolbox

2. Save Files:

   - Save GrantContract.sol in contracts/.
   - Save GrantContract.js in ignition/modules/.

3. Compile:

Bash

npx hardhat compile

4. Deploy:

Bash

npx hardhat ignition deploy ignition/modules/GrantContract.js --network <network-name>

5. Save Contract Address:
   - After deployment, save the displayed contract address.

## How the Contract Works

1. Owner:
   - Creates grants with a release time.
   - Reverts grants before release time.
2. Beneficiary:
   - Accesses grants after release time.
3. Public:
   - Retrieve grant details, total balance, and time left.
