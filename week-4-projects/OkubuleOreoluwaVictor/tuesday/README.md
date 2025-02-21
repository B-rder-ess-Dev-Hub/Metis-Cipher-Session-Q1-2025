verified contract address sourcify: https://repo.sourcify.dev/contracts/full_match/59902/0x83aaB126281dFacCa68C91692f0a410B23FA3203/

#SHORT NOTE ON OVERFLOW AND UNDERFLOW
In Solidity, overflow and underflow are issues that occur when arithmetic operations exceed the limits of a variable's data type.

Overflow happens when a value exceeds the maximum limit of its data type. For example, if a uint8 variable (range: 0 to 255) is incremented beyond 255, it overflows and wraps around to 0.

Underflow occurs when a value goes below the minimum limit of its data type. For instance, if a uint8 variable is decremented below 0, it underflows and wraps around to 255.

Before Solidity 0.8.0, these issues were not automatically checked, leading to vulnerabilities like those exploited in the infamous DAO hack. However, starting from Solidity 0.8.0, the compiler automatically reverts transactions on overflow or underflow, preventing such bugs. For versions prior to 0.8.0, developers can use libraries like SafeMath to handle these issues safely.


#MYVOTING CONTRACT DOCUMENTATION

# Simple Voting Platform Documentation

## Overview
This document details a prototype implementation of a blockchain-based voting platform developed in Solidity. The platform enables political party-restricted voting, where voters can only cast votes for candidates from their registered party.

## Contract Structure

# Key Components
1. *Voter Registration System:
   - Tracks individual voter information including ID, age, and party affiliation
   - Maintains a running count of registered voters
   - Maps voter addresses to their registration details

2. #Candidate Management System:
   - Stores candidate information including name and party affiliation
   - Tracks vote counts for each candidate
   - Maintains a running count of registered candidates

3. *Voting System:
   - Enforces single-vote policy per address
   - Implements party-matching validation
   - Emits events for vote tracking

## Data Structures

# RegisterVoter Struct
struct RegisterVoter {
    uint256 voter_no;        // Unique voter identification number
    string votername;        // Name of the voter
    uint256 age;            // Age of the voter
    uint256 NationalID_no;  // National ID number for verification
    string politicalparty;  // Political party affiliation
    address voteraddr;      // Blockchain address of the voter
}


# Candidate Struct
struct Candidate {
    uint256 id;             // Unique candidate identification number
    string name;            // Name of the candidate
    uint256 voteCount;      // Number of votes received
    string politicalparty;  // Political party affiliation
}
```

## Key Functions

# Voter Registration
function addvoter(string memory _name, uint256 age, uint256 nationalID_no, string memory _politicalparty)

Allows users to register as voters by providing:
- Full name
- Age
- National ID number
- Political party affiliation

The function automatically:
- Increments the voter count
- Maps the voter's blockchain address to their registration details

# Candidate Registration

function addCandidate(string memory _name, string memory _politicalparty)

Enables adding new candidates to the system with:
- Candidate name
- Political party affiliation

The function:
- Increments the candidate count
- Initializes vote count to zero
- Stores candidate information in the contract

# Voting Process

function vote(uint256 _candidateId)

Manages the voting process with multiple validations:
1. Pre-vote Checks:
   - Verifies voter hasn't previously voted
   - Validates candidate ID exists
   - Confirms voter is registered
   - Ensures party affiliation matches between voter and candidate

2. Vote Recording:
   - Marks voter's address as having voted
   - Increments candidate's vote count
   - Emits a VotedEvent for blockchain tracking

 Security Features

1. Anti-Double Voting:
   - Mapping tracks voting status per address
   - Requires check prevents multiple votes from same address

2. Party Verification
   - Keccak256 hash comparison ensures exact party name matching
   - Prevents cross-party voting
   - Case-sensitive party name validation

3. Registration Validation
   - Requires voter registration before voting
   - Validates candidate IDs against existing records


## Event Logging

The contract emits a VotedEvent for each successful vote cast:

event VotedEvent(uint256 indexed candidateId);
This enables:
- Vote tracking

