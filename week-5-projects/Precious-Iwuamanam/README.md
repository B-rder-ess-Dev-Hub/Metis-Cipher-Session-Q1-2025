# What is this?

This is my attempt at making a solidity smart contract for managing grants between beneficiaries and donors.

It has 3 events:

1. GrantCreated (which is emitted when creating a new grant)
2. GrantReverted (this is emitted when a grant that has been claimed yet is revoked)
3. GrantClaimed (this is the event that is emitted once the grant beneficiary gets funded from the grant)

Grants are simple struct objects that store the amount, expiry date for unlocking(unlockTime), beneficiary address, and a boolean value to know if a grant actually exists or if solidity is returning an empty Grant struct.

# How did I deploy this?

I didnt deploy on a testnet, I havent been able to figure that one out yet. But I deployed it locally using the hardhat ignition library.

I made a deploy script at `./ignition/modules/GrantContract.js` and deployed with `npx hardhat ignition deploy ./ignition/modules/GrantContract.js`.

After deploying, it gave me the deploy address of `0x5FbDB2315678afecb367f032d93F642f64180aa3` and the attached screenshot illustrates the state of the terminal screen at the end of my deployment.