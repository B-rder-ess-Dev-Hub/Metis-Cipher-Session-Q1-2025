# Area Calculator Smart Contract Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.
**Verified Contract Address:** 0x8A47e4379c305dFfe3032C6BBB2dc450661F078A  
**Link:** [Metis-Sepolia Testnet](https://sepolia-explorer.metisdevops.link/address/0x8A47e4379c305dFfe3032C6BBB2dc450661F078A)


# Short Note on `=`, `==`, and `===` in Solidity

In Solidity, `=`, `==`, and `===` are used for different purposes:

1. **`=` (Assignment Operator)**:
   - This is the **assignment operator** used to assign a value to a variable.
   - Example:
     ```solidity
     uint256 x = 5; // Assigns the value 5 to the variable x.
     ```

2. **`==` (Equality Operator)**:
   - This is the **equality operator** used to compare two values to check if they are **equal**.
   - It returns a boolean value (`true` or `false`).
   - Example:
     ```solidity
     uint256 a = 5;
     uint256 b = 5;
     bool isEqual = (a == b); // Evaluates to true
     ```

3. **`===` (Strict Equality Operator)**:
   - Solidity **does not** support the `===` operator.
   - In JavaScript, `===` checks both the value and type (strict equality), but in Solidity, only `==` is used to compare values. Type casting or conversions are handled explicitly by Solidity when needed.
   - Therefore, using `===` in Solidity would result in a syntax error.

### Summary:
- `=`: Used for assignment.
- `==`: Used for equality comparison.
- `===`: **Not supported** in Solidity (use `==` for comparisons).