# Week 6 Test

## Deployed OzelToken Contract Address - 0xBA33f97A8A42cFD0d50362476FFAc143401d990a

## Deployed Airdrop Contract Address - 0x0Bfd5b89957a2c96d31e128efE5B37bdE334d532

---

## What the Project is About

### Overview
This project demonstrates a gas-efficient ERC-20 token ("OZEL") distribution system using Merkle Proof verification. It consists of:
1. **OzelToken** - A standard ERC-20 implementation
2. **Airdrop Contract** - Merkle-tree based claim mechanism
3. **Merkle Tree Generator** - Offline proof generation script

Key features:
- Whitelist-based airdrop system
- Cryptographic proof verification
- Prevention of double claims
- Admin-controlled parameters

---

### Components Breakdown

#### 1. ERC-20 Token Implementation (`OzelToken.sol`)
- **Standard Compliance**: Uses OpenZeppelin's battle-tested ERC20 template
- **Initial Supply**: Minted to deployer during construction
- **Token Details**:
  - Name: `Ozel`
  - Symbol: `OZ`
  - Decimals: `18`
- **Security**: No special privileges post-deployment

#### 2. Merkle Airdrop Contract (`Airdrop.sol`)
- **Eligibility Verification**: Uses Merkle proofs for whitelist checks
- **Key Functions**:
  - `claim()`: User-facing token claim
  - `verify()`: Merkle proof validation
  - Admin controls for root/amount updates
- **Security Features**:
  - Reentrancy protection
  - Claim tracking mapping
  - Owner-only withdrawals

### 3. Merkle Tree Generation (`merkletree.js`)
- **Offline Generation**: Creates cryptographic proofs without on-chain storage
- **Process**:
  1. Hashes whitelisted addresses
  2. Builds Merkle tree
  3. Generates JSON file with proofs
- **Output**:
  - Merkle root hash for contract initialization
  - Individual proofs for each whitelisted address

---

## Deployed Contract Links: 
[Deployed OzelToken Contract](https://sepolia-explorer.metisdevops.link/address/0xBA33f97A8A42cFD0d50362476FFAc143401d990a)
[Deployed Airdrop Contract](https://sepolia-explorer.metisdevops.link/address/0x0Bfd5b89957a2c96d31e128efE5B37bdE334d532)

---

## Deployed Frontend Link:
[Deployed AirdropDapp](https://airdropdapp-er82jn943-blossoms-projects-87e509e7.vercel.app )