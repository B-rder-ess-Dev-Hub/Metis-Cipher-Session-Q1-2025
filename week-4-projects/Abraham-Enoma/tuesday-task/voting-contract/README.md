# Voting System Smart Contract

## Overview
This Solidity smart contract implements a decentralized voting system where eligible voters can register and vote for candidates. The contract allows for election management, including starting and stopping elections, approving candidates, and withdrawing candidate deposits.

## Features
- **Admin & Owner Roles:** The contract owner can add admins, and admins have special privileges.
- **Voter Registration:** Only Nigerian citizens above 18 can register to vote.
- **Candidate Registration:** Candidates must deposit 0.01 ETH and get admin approval.
- **Election Control:** Admins can start and stop elections, disabling further registrations.
- **Voting Process:** Admins, the owner, and registered voters can vote once, and votes are counted transparently.
- **Election Winner:** The contract determines and displays the winner after the election and allows checking the leading candidate while the election is ongoing.
- **Fund Withdrawal:** The owner can withdraw candidate deposits.

## Smart Contract Details
### State Variables
- `i_owner`: The contract owner.
- `admins`: A mapping of addresses with admin privileges.
- `candidates`: A mapping of registered candidates.
- `candidateList`: An array storing all candidates.
- `voters`: A mapping of registered voters.
- `electionActive`: Boolean indicating if the election is active.
- `registrationOpen`: Boolean indicating if registrations are open.

### Events
- `AdminAdded(address newAdmin)`
- `CandidateRegistered(address candidate, string candidateName)`
- `VoterRegistered(address voter, string name)`
- `CandidateApproved(address candidate, string candidateName)`
- `Voted(address voter, address candidate, string candidateName)`
- `ElectionStarted()`
- `ElectionStopped(address winner, string winnerName, uint votes)`
- `FundsWithdrawn(address owner, uint amount)`

### Functions
#### Admin & Owner Functions
- `addAdmin(address _admin)`: Adds an admin (only owner).
- `startElection()`: Starts the election (only admin).
- `stopElection()`: Stops the election and announces the winner (only admin).
- `withdrawFunds()`: Withdraws candidate deposits (only owner).

#### Registration Functions
- `registerAsVoter(string _name, uint8 _age, uint256 _nin, string _nationality)`: Registers a voter.
- `registerAsCandidate(string _name, uint8 _age, string _party, string _manifesto, uint256 _nin)`: Registers a candidate with a deposit.
- `approveCandidate(address _candidate)`: Approves a candidate (only admin).

#### Voting Functions
- `vote(address _candidate)`: Allows an admin, the owner, or a registered voter to cast a vote.
- `getLeadingCandidate()`: Returns the current leading candidate.

## Deployment & Usage
### Prerequisites
- Node.js & Hardhat installed.
- A Solidity-compatible wallet like MetaMask.

### Deployment Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/spxctr00m/Metis-Cipher-Session-Q1-2025/tree/main/week-4-projects/Abraham-Enoma/tuesday-task
   cd voting-contract
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Compile the contract:
   ```sh
   npx hardhat compile
   ```
4. Deploy the contract:
   ```sh
   npx hardhat run scripts/deploy.js --network <network>
   ```

## Author
Abraham Enoma - [GitHub](https://github.com/spxctr00m)

## License
This project is licensed under the MIT License.

