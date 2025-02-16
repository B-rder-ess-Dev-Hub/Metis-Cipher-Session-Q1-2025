# Research
#How to verify smart contracts deployed via Hardhat on the Metis blockchain.


To verify smart contracts deployed via Hardhat on the Metis blockchain, you can utilize the hardhat-verify plugin, which simplifies the verification process by interfacing with Etherscan-compatible APIs. Metis Explorer supports this method, allowing for seamless contract verification. Here's a step-by-step guide:

## Part One: Blockchain Use Cases in Various Industries

### 1.Install the hardhat-verify Plugin: In your Hardhat project directory, install the plugin by running.

### 2. Configure the Plugin: Update your hardhat.config.js or hardhat.config.ts file to include the plugin and set the necessary configurations.

Replace 'YOUR_PRIVATE_KEY' with your wallet's private key and 'YOUR_ETHERSCAN_API_KEY' with your Etherscan API key. Ensure you have an Etherscan API key; if not, you can obtain one by signing up on Etherscan's website.

### 3.Deploy Your Contract: Deploy your smart contract to the Metis network using Hardhat's deployment scripts. For example, create a deploy.js script in the scripts directory:

npx hardhat run scripts/deploy.js --network metis


### 4.Verify Your Contract: After deployment, verify your contract using the verify task provided by the plugin:

*npx hardhat verify --network metis DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1" "Constructor argument 2"*

Replace DEPLOYED_CONTRACT_ADDRESS with your contract's address and provide any constructor arguments if applicable.

By following these steps, your smart contract will be verified on the Metis Explorer, allowing users to view your source code and interact with your contract directly through the explorer. 


## 3. Data Types  
Solidity supports various data types, including:  

- **Boolean**: `bool` (true/false)  
- **Integer**: `int` and `uint` (signed and unsigned)  
- **Address**: Represents an Ethereum address  
- **String & Bytes**: `string`, `bytes`  
- **Structs & Enums**: Used to create custom data types  


## 4. Functions & Modifiers  
Functions in Solidity have different visibility levels:  

- **public**: Accessible from anywhere  
- **private**: Accessible only inside the contract  
- **external**: Can only be called from outside the contract  
- **internal**: Accessible within the contract and derived contracts  

**Example:**  
```solidity
function setNumber(uint256 _num) public {
    myNumber = _num;
}


## 5. Control Structures  
Solidity provides:  

- **Conditional Statements**: `if`, `else`  
- **Loops**: `for`, `while`, `do while`  
- **Error Handling**: `require`, `assert`, `revert`  

**Example:**  
```solidity
require(msg.value >= 1 ether, "Minimum 1 ETH required");



## 6. Events & Logging  
Events allow logging data on the blockchain for external applications to access.  

**Example:**  
```solidity
event Transfer(address indexed from, address indexed to, uint256 value);



## 7. Solidity Best Practices  
- Use `pragma solidity` to specify compatible compiler versions.  
- Validate inputs using `require` and `revert`.  
- Follow security best practices, such as the **checks-effects-interactions** pattern.  





