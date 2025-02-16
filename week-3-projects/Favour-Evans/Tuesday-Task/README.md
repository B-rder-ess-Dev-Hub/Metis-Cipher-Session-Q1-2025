# Tuesday Task 

### Verified contract address: 0x127C66b11E9B1d741Ba37184D902faC82B9FdDc4 
### Verified contract address link:  
**[Favour's Link] (https://sepolia-explorer.metisdevops.link/address/0x127C66b11E9B1d741Ba37184D902faC82B9FdDc4)**

### Difference Between =, ==, and === in Solidity
#### 1. `=` (Assignment Operator)
- It is used to assign value to a variable. 
- It is used to initialize or update variables.

#### 2. `==` (Equality Operator)
- It is used to compare two values for equality. 
- It checks if the values on the left and right sides are equal.
- It returns a boolean value (`true` or `false`).
- It is commonly used in conditional statements like `if` or `require`.

#### 3. `===` (Strict Equality Operator)
- It is used for strict equality checks, which compare both value and type.
- Solidity does not support the `===` operator.

---

### Important Notes
- In Solidity, the `==` operator is sufficient for comparing values, as Solidity is a statically-typed language. Type mismatches are caught at compile time so this eliminates the need for a strict equality operator like `===`.
- Always use `==` for equality checks and `=` for assignments to avoid logical errors.

