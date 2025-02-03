# Solidity Documentation Notes

## 1. Introduction to Solidity
Solidity is an object-oriented, high-level programming language designed for implementing smart contracts on the Ethereum blockchain. It is statically typed and influenced by JavaScript, Python, and C++.

**Key Features:**
- Statically typed
- Supports inheritance and user-defined types
- Allows interaction with the Ethereum Virtual Machine (EVM)

## 2. Solidity File Structure
A Solidity file typically consists of:
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    // State variables
    uint256 public myNumber;

    // Constructor
    constructor() {
        myNumber = 100;
    }
}
```

## 3. Data Types
Solidity provides various data types:
- **Boolean**: `bool` (true/false)
- **Integer**: `int` and `uint` (signed and unsigned)
- **Address**: Represents an Ethereum address
- **String & Bytes**: `string`, `bytes`
- **Structs & Enums**: Used to create complex types

Example:
```solidity
struct Person {
    string name;
    uint age;
}
```

## 4. Functions & Modifiers
Functions in Solidity can be:
- `public`: Accessible from anywhere
- `private`: Accessible only inside the contract
- `external`: Called only from outside the contract
- `internal`: Called only within the contract and derived contracts

Example:
```solidity
function setNumber(uint256 _num) public {
    myNumber = _num;
}
```

## 5. Control Structures
Solidity supports:
- **Conditional statements**: `if`, `else`
- **Loops**: `for`, `while`, `do while`
- **Error handling**: `require`, `assert`, `revert`

Example:
```solidity
require(msg.value >= 1 ether, "Minimum 1 ETH required");
```

## 6. Events & Logging
Events allow logging data to the blockchain for external applications.
```solidity
event Transfer(address indexed from, address indexed to, uint256 value);
```

## 7. Solidity Best Practices
- Use `pragma solidity` to specify compatible compiler versions.
- Validate inputs using `require` and `revert`.
- Follow best security practices, such as checks-effects-interactions patterns.


