# Week 3 Submission

## Contract Address

**Contract Address:** 0x9086D4F1c87FD80B11BE3E10895C49e20a44b91e
![alt text](image.png)

## Difference between `=`, `==`, and `===`

|  | `=` (Assignment Operator) | `==` (Equality Operator) | `===` (Strict Equality Operator) |
|:---: |:---:|:---:|:---:|
| definition | This is the assignment operator. It is used to assign a value to a variable. It Assigns the value on its right to the variable on its left. | It Compares two values for equality. Returns true if both operands are equal; otherwise, returns false. Usually used in conditional statements | The `===` operator is not available in Solidity |
| example | `uint x = 40` | `if(x == y) { ... }` | `N/A`

In Summary:  

- `=` is the assignment operator (e.g., `uint x = 10;`).  
- `==` is the equality operator, returning `true` if values are the same (e.g., `bool isEqual = (x == 10);`).  
- Solidity does **not** have `===` like JavaScript.
