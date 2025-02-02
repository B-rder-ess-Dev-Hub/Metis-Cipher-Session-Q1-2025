# **📌 Solidity Notes**  

📅 **Week 2**  

---

## **Introduction to Solidity**  

Solidity is a **statically typed**, **object-oriented** programming language designed for writing **smart contracts** on Ethereum and other EVM-compatible blockchains.  

- **File Extension:** `.sol`
- **License Identifier:** It is recommended to add the `SPDX` license identifier to every solidity file. Examples:

#### Unlicensed

```solidity
// SPDX-License-Identifier: UNLICENSED
```
#### Licensed

```solidity
// SPDX-License-Identifier: LICENSED
```
#### MIT

```solidity
// SPDX-License-Identifier: MIT
```

- **Version Pragma:** Specifies the Solidity version for the compiler. Example:

  ```solidity
  pragma solidity ^0.8.28;
  ```

---

## **Solidity Basics**  

### **Data Types**  

Solidity has several data types:  

- **Integers:** `uint`, `int` (e.g., `uint256 x = 100;`)  
- **Boolean:** `bool` (`true` or `false`)  
- **Address:** `address` (e.g., `address owner = msg.sender;`)  
- **String & Bytes:** `string`, `bytes32`  
- **Arrays:** `uint[]`, `string[]`  
- **Mappings:** Key-value storage (`mapping(address => uint) balances;`)  

---

### **Functions**  

Functions allow execution logic in contracts:  

- **Basic Function Example:**  

  ```solidity
  function getBalance() public view returns (uint) {
      return address(this).balance;
  }
  ```

- **Modifiers:** `view`, `pure`, `payable`  

- **Visibility:** `public`, `private`, `internal`, `external`  

---

## **Smart Contract Structure**  

### **Contract Definition**  

```solidity
contract MyContract {
    uint public myNumber;

    constructor(uint _num) {
        myNumber = _num;
    }
}
```

### **State Variables & Storage**  

- **State Variables:** Stored on the blockchain.  
- **Memory vs Storage:**  
  - `storage` → Persistent  
  - `memory` → Temporary  

Example:

```solidity
string public name = "Solidity";
```

---

## **Inheritance & Modifiers**  

### **📍 Inheritance**  

Contracts can inherit from other contracts:  

```solidity
contract A {
    function foo() public pure returns (string memory) {
        return "Hello";
    }
}

contract B is A {
    function bar() public pure returns (string memory) {
        return foo();
    }
}
```

### **Function Modifiers**  

Modifiers alter function behavior:  

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Not the owner");
    _;
}

function withdraw() public onlyOwner {
    // Only owner can withdraw
}
```

When defining a function modifier, you can use the `_;` syntax as a placeholder to specify where the function code should be run. For example, the function code will run after the `require()` check:

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Not the owner");
    _;
}
```

And the following modifier will run the function code before the `require()` check:

```solidity
modifier onlyOwner() {
    _;
    require(msg.sender == owner, "Not the owner");
}
```

---

## **Events & Error Handling**  

### **Events**  

Used to log information:  

```solidity
event Transfer(address indexed from, address indexed to, uint amount);

function send(address to, uint amount) public {
    emit Transfer(msg.sender, to, amount);
}
```

### **📍 Error Handling**  

- `require(condition, "Error message")`  
- `revert("Error message")`  
- `assert(condition)`  

Example:

```solidity
require(msg.sender == owner, "Access denied");
```

---

## **Contract Deployment & Gas Optimization**  

- **Deployment:** Contracts are deployed using frameworks like **Hardhat**, **Truffle**, **Foundry**, or **Remix**.  
- **Gas Optimization:**  
  - Use `uint8` instead of `uint256` for small numbers.  
  - Avoid unnecessary storage writes.  

---

### **📝 Summary**  

✅ Solidity is the main language for writing Ethereum smart contracts.  
✅ Contracts include state variables, functions, modifiers, and events.  
✅ Gas optimization is important for efficiency.  
