# Week 2(Tuesday) Tasks

## Part 4: Study Solidity Documentation

**What I learned from Solidity Documentation**

### Solidity Overview

Solidity is an object-oriented, high-level programming language designed for implementing smart contracts on the Ethereum blockchain. It draws inspiration from languages like C++, Python, and JavaScript, and is statically typed, supporting features such as inheritance, libraries, and complex user-defined types. 

#### Key Concepts:

- **Smart Contracts:** Self-executing programs that manage the behavior of accounts within the Ethereum state. 

- **Solidity Source File Structure:** A typical Solidity file includes:

- **Pragma Directive:** Specifies the compiler version to ensure code compatibility.

- **Import Statements:** Allow code reuse by importing definitions from other files.

- **Contract Definition:** The core component where state variables, functions, function modifiers, events, errors, struct types, and enum types are declared.

 **Data Types:** Solidity offers a variety of elementary types, including:
      - **Booleans:** Represent true or false values.
      - **Integers:** Support both signed and unsigned integers of various sizes.
      - **Address:** Holds a 20-byte value representing a contract or wallet address.
      - **Fixed-Point Numbers:** Currently not fully supported.
      - **Enums:** User-defined types for enumerating custom values.
      - **Structs:** Custom-defined types that group variables.
      - **Mappings:** Key-value data structures for storing associations. 


- **Visibility Specifiers:** Define the accessibility of functions and state variables:
      - **Public:** Accessible both externally and internally; generates a getter function for state variables.
      - **Private:** Accessible only within the current contract.
      - **Internal:** Accessible within the current contract and derived contracts.
      - **External:** Accessible only externally; typically used for functions intended to be called from other contracts or transactions. 

- **Functions:** Blocks of reusable code that can be called within contracts. Functions can have various attributes, including:
  - **View:** Indicates that the function will not alter the state.
  - **Pure:** Indicates that the function neither reads nor alters the state.
  - **Payable:** Allows the function to receive Ether.

- **Control Structures:** Solidity supports standard control structures such as conditional statements (`if`, `else`), loops (`for`, `while`), and exception handling (`require`, `assert`, `revert`). 

- **Events:** Used to log information on the blockchain, which can be accessed by off-chain applications.

- **Inheritance:** Solidity supports both single and multiple inheritance, allowing contracts to inherit properties and functions from parent contracts.

- **Libraries:** Special contracts that contain reusable code, which can be called by other contracts without the need for inheritance.

- **Interfaces:** Define the functions that a contract must implement, without providing the function implementations.

For a practical understanding, the "Solidity by Example" section provides illustrative examples of common patterns and use cases in Solidity programming. 

One of the things most important thing I also learned is following best practices in Solidity development, including **thorough testing, code reviews, and adhering to the style guide to ensure code quality and security** 



Here are a few practical Solidity examples from the "Solidity by Example" section:

A simple contract that stores and retrieves a string.

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract HelloWorld {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
```
**How it works**
      -The contract initializes a message variable.
      -The setMessage function updates the message.
      -The getMessage function returns the current message.


**A contract with increment and decrement functions.**

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Counter {
    uint public count;

    function increment() public {
        count += 1;
    }

    function decrement() public {
        require(count > 0, "Counter cannot go below zero");
        count -= 1;
    }
}


**How it works**
      -Declares a smart contract named Counter.
      -Defines a state variable count of type uint (unsigned integer).
      -Declares a function increment() that increases count by 1.
      -The public keyword allows anyone to call this function.
      -The require statement checks a condition before executing the next line.
      -If count > 0 is false, it reverts the transaction and shows the error message "Counter cannot go below zero".
      -This prevents count from becoming negative, since Solidity uint (unsigned integer) cannot hold negative values.
