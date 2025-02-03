# Solidity Documentation Notes

## 1. Basics of Solidity
- Contracts: Fundamental building blocks (similar to classes in OOP)
  - Contain state variables, functions, function modifiers, events, errors, and structs
  - Example:
   
    contract SimpleContract {
        uint public data;
        
        function setData(uint _data) public {
            data = _data;
        }
    }
    
## 2. Data Types
- Value Types:
  - uint, int, bool, address, bytes32, etc.
  - address payable vs address (difference in ETH transfer capability)
  
- Reference Types:
  - Arrays (uint[]), Structs, Mappings
  - Storage locations: storage, memory, calldata

- Special Types:
  - enum: User-defined type for constants
  - bytes and string: Dynamic byte arrays

## 3. Functions
- Visibility:
  - public, private, internal, external
  
- Function Modifiers:
  - Custom logic for function restrictions
  - Example:
   
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    
  
- State Mutability:
  - pure (no state read/write)
  - view (read-only)
  - payable (can receive ETH)

- Special Functions:
  - constructor()
  - receive() external payable
  - fallback() external

## 4. Error Handling
- require(condition, "Error message"): Reverts on false
- revert("Error message"): Immediate revert
- assert(condition): For internal errors (e.g., overflow checks)
- Custom Errors (Cheaper than strings):
  `solidity
  error InsufficientBalance(uint available, uint required);

## 5. Inheritance & Interfaces
- Inheritance:
  - contract Child is Parent1, Parent2 { ... }
  - Abstract contracts with abstract keyword
  
- Interfaces:
  - Declare function stubs without implementation
  - Cannot inherit other contracts, only interfaces

## 6. Events & Logging
- Declare Events:
 
  event DataUpdated(uint oldValue, uint newValue);
  
- Emit Events:
 
  emit DataUpdated(previousData, newData);
  
- Used for off-chain tracking via transaction logs

## 7. Security Considerations
- Reentrancy Attacks:
  - Use Checks-Effects-Interactions pattern
  - Apply nonReentrant modifier (from OpenZeppelin)
  
- Overflow/Underflow:
  - Use Solidity ≥0.8.x (built-in checks)
  - Explicit unchecked blocks for gas optimization

## 8. Gas Optimization
- Use constant/immutable variables
- Pack variables (e.g., uint128, uint128 → single storage slot)
- Prefer calldata over memory for function parameters
- Loop optimizations (cache array length)

## 9. Key Global Variables
- msg.sender: Address of caller
- msg.value: ETH sent with transaction
- block.timestamp: Current block time
- address(this).balance: Contract's ETH balance

## 10. Best Practices
- Follow Solidity Style Guide
- Use established libraries (e.g., OpenZeppelin)
- Test thoroughly with tools like Hardhat/Foundry
- Perform audits for production contracts

## 11. Version Pragma
- Specify compiler version at file start:
 
  // SPDX-License-Identifier: MIT
  pragma solidity ^0.8.20;
  
  ## Resources
- [Official Docs](https://docs.soliditylang.org)
- [Solidity by Example](https://solidity-by-example.org)
