# Week 5 Tasks

## Deployed Contract Address - 0x8d50c53FA44c21B22acB2FdD705a53ED8F331F26

## How the Contract Works

- The contract is initialized with an owner (the deployer).
- The owner can create grants for beneficiaries by calling the `createGrant` function and sending Ether.
- Beneficiaries can release their grants by calling the `releaseGrant` function after the release time has elapsed.
- The owner can revert grants by calling the `revertGrant` function before the release time has elapsed.
- Grant information can be retrieved using the `getGrantInfo` function.
- The total Ether stored in the contract can be checked using the `getTotalBalance` function.
- The time left before a grant can be released can be checked using the `getTimeLeft` function.

