# Week 4 Tasks

## Verified Contract Address - 0x3D4a846f58F04778ae86A1B5812Ac2C738893213

## Contract And Deployment Details 

### Features
- **Voter Registration**: Only registered voters can vote. Voters provide their name, age, NIN, and nationality.
- **Contestant Registration**: Only registered contestants can be voted for. Contestants provide their name, age, party, and manifesto.
- **Voting Process**: Only registered and qualified voters can vote. Each voter can vote only once.
- **Vote Transparency**: Vote counts for each contestant and the total votes cast are publicly visible.
- **Admin Control**: Only 5 designated admins can register voters and contestants.
- **President-Elect**: The president-elect is automatically calculated and stored after the voting period ends.

---

### Key Functions
- **registerVoter**: Registers a voter (admin-only).
- **registerContestant**: Registers a contestant (admin-only).
- **vote**: Allows a registered voter to cast a vote.
- **declarePresidentElect**: Declares the president-elect after the voting period ends (admin-only).
- **getContestantVotes**: Returns the vote count for a specific contestant.
- **getTotalVotes**: Returns the total votes cast.

---

## Part 4: Overflow and Underflow in Solidity

In Solidity, overflow and underflow are issues that occur when performing arithmetic operations on integers. These issues arise due to the fixed size of data types in Solidity.

---

### Overflow
Overflow occurs when the result of an arithmetic operation exceeds the maximum value that can be stored in a data type.
- **Example**:
  - If you have a `uint8` (an 8-bit unsigned integer), its maximum value is `255`.
  - If you add `1` to `255`, it will overflow and wrap around to `0`.

  ```solidity
  uint8 a = 255;
  a = a + 1; // a becomes 0 (overflow)
  ```
  
---

### Underflow
Underflow occurs when the result of an arithmetic operation is smaller than the minimum value that can be stored in a data type.
- **Example**:
  - If you have a `uint8`, its minimum value is `0`.
  - If you subtract `1` from `0`, it will underflow and wrap around to `255`.

  ```solidity
  uint8 b = 0;
  b = b - 1; // b becomes 255 (underflow)
  ```