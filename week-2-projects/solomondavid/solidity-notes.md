## Solidity Notes

### Smart Contracts
A smart contract is a self-executing program stored on a blockchain that automatically enforces and executes the terms of an agreement when predefined conditions are met. They eliminate intermediaries, ensuring secure, transparent, and tamper-proof transactions in Web3 applications.

#### Example of a smart contract. 
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
```

The pragma tells the compiler which version of Solidity to use. 
The SimpleStorage contract has the "contract" data type. 
The storedData is an unsigned integer. It's value is read with the get function and updated with the set function. 


### Ethereum Virtual Machine. 
This is the runtime environment for smart contracts. Smart contracts run on the EVM are isolated from one another. 


### Accounts
Accounts on the EVM are of two types:
1. External Accounts, which are controlled by private-public keys (owned by humnas).
2. Contract Accounts, which are controlled by the code stored together with the account.

### Transactions
A message sent from one account to another. It may contain payload

### Gas
A charge paid for the execution of a transaction. 


## Installing the Solidity Compiler
There are several ways to install the solidity compiler. To install it using NPM, run the following code. 
`npm install -g solc`

