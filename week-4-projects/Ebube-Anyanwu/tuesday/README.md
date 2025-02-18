# VotingContract by Ebube Anyanwu
### Deployed Contract Address - 0xC3Db9B072D2595F695BF063cc1BFa9d31266531c [Link](https://sepolia-explorer.metisdevops.link/address/0xC3Db9B072D2595F695BF063cc1BFa9d31266531c?tab=contract_code)

## Overview

`VotingContract` is a smart contract that allows for decentralized voting in elections. The contract manages voters, contestants, and election processes including registration, voting, and tallying votes. It ensures only eligible voters can participate and ensures that each voter can vote only once during the election period.

This contract also requires exactly 5 admin addresses to be specified during deployment to manage the election process.

### Key Features:
- **Admin Management**: Only admins can register contestants and voters, start and end elections.
- **Voter Registration**: Nigerian citizens aged 18 or above can register as voters.
- **Contestant Registration**: Nigerian citizens aged between 30 and 65 can register as contestants representing different political parties.
- **Election Management**: Admins can start and end elections, and the contract automatically determines the winner based on vote counts.
- **Voting**: Registered voters can vote for their preferred contestant during the election period. Each voter can only vote once.
- **Vote Tallying**: The contract keeps track of votes for each contestant and announces the winner when the election ends.

---

## Contract Structure

### 1. `Voter` Struct
- **name**: The name of the voter.
- **age**: The age of the voter.
- **NIN**: The National Identification Number (NIN) of the voter.
- **nationality**: The nationality of the voter (should be "Nigerian").
- **hasVoted**: A flag indicating whether the voter has already voted.
- **isRegistered**: A flag indicating whether the voter is registered.

### 2. `Contestant` Struct
- **name**: The name of the contestant.
- **age**: The age of the contestant.
- **nationality**: The nationality of the contestant (should be "Nigerian").
- **party**: The political party the contestant belongs to (PDP, APC, APGA, LP).
- **manifesto**: The manifesto of the contestant.
- **voteCount**: The total votes received by the contestant.
- **isRegistered**: A flag indicating whether the contestant is registered.

### 3. State Variables
- **isAdmin**: A mapping that tracks whether an address is an admin.
- **voters**: A mapping from voter addresses to voter data.
- **contestants**: A mapping from contestant addresses to contestant data.
- **contestantAddresses**: An array of all contestant addresses.
- **electionHasStarted**: A boolean flag indicating if the election has started.
- **electionHasEnded**: A boolean flag indicating if the election has ended.
- **electionEndTime**: The time when the election ends.
- **totalVotes**: The total number of votes cast in the election.
- **presidentElect**: The name of the contestant who wins the election.

---

## Contract Functions

### 1. `registerContestant` (Admin Only)
- **Parameters**:
  - `_contestant`: The address of the contestant.
  - `_name`: The name of the contestant.
  - `_age`: The age of the contestant.
  - `_nationality`: The nationality of the contestant (must be "Nigerian").
  - `_party`: The political party the contestant belongs to. 0 for PDP, 1 for APC, 2 for APGA and 3 for LP).
  - `_manifesto`: The manifesto of the contestant.
  
- **Description**: Registers a new contestant if the contestant is eligible (between the ages of 30 and 65, Nigerian nationality, and not already registered).

---

### 2. `registerVoter` (Admin Only)
- **Parameters**:
  - `_voter`: The address of the voter.
  - `_name`: The name of the voter.
  - `_age`: The age of the voter.
  - `_NIN`: The National Identification Number (NIN) of the voter.
  - `_nationality`: The nationality of the voter (must be "Nigerian").

- **Description**: Registers a new voter if the voter is eligible (18 years old and above, Nigerian nationality, and not already registered).

---

### 3. `startElection` (Admin Only)
- **Description**: Starts the election process. Once called, voters can start voting for contestants.

---

### 4. `vote` (Voter Only)
- **Parameters**:
  - `_contestant`: The address of the contestant to vote for.
  
- **Description**: Allows a registered voter to cast their vote for a registered contestant. Each voter can vote only once during the election.

---

### 5. `endElection` (Admin Only)
- **Description**: Ends the election once the election duration is over. It calculates and announces the winner based on the highest number of votes.

---

### 6. `getContestantVoteCount` (Public)
- **Parameters**:
  - `_contestant`: The address of the contestant.
  
- **Returns**: The total number of votes cast for a specific contestant.

---

### 7. `getTotalVotes` (Public)
- **Returns**: The total number of votes cast in the election.

---

## Security Considerations

- **Admin Control**: Only admins can manage voters, contestants, and election state.
- **Voting Restrictions**: Each voter can only vote once, preventing double voting.
- **Age and Nationality Validation**: Only eligible voters and contestants based on age and nationality can be registered.

---

# Difference Between Overflow and Underflow in Solidity

In Solidity, **overflow** and **underflow** are types of errors that occur during arithmetic operations when the result exceeds the maximum or minimum limit of a data type.

### Overflow
Overflow happens when a value exceeds the maximum limit of a data type. For example, if an `uint8` (which can hold values from 0 to 255) exceeds 255, it "overflows" and wraps around to 0. This can lead to unexpected behavior or vulnerabilities in smart contracts.

**Example of Overflow:**
```solidity
uint8 a = 255;
a += 1;  // a overflows and becomes 0
```

### Underflow
Underflow occurs when a value goes below the minimum limit of a data type. For example, subtracting 1 from 0 in an `uint8` would cause it to "underflow" and wrap around to 255.

**Example of Underflow:**
```solidity
uint8 b = 0;
b -= 1;  // b underflows and becomes 255
```

### Mitigating Overflow and Underflow
In Solidity version 0.8.0 and later, overflow and underflow are automatically checked, and an error is thrown if the condition is met. However, in earlier versions, developers had to use libraries like `SafeMath` to prevent these errors.

```solidity
// Solidity 0.8.0 and later prevents overflow and underflow by default.
uint8 x = 255;
x += 1;  // This will revert the transaction due to overflow
```