# Week 1b Tasks

Here's my submission for the Metis Cipher Session Q1 2025 Week 1b tasks.

## Article: Understanding the Ethereum Virtual Machine (EVM)

Read my article on [Understanding the Ethereum Virtual Machine (EVM)](https://mapleberry.hashnode.dev/understanding-the-ethereum-virtual-machineevm) published on hashnode.

## Merkle Patricia Trees in the EVM

The Merkle Patricia Tree(MPT) is a data structure that combines the properties of a Merkle tree and a Patricia trie used in the EVM for for storing key-value pairs in a way that enables efficient verification of data integrity. MPT are specialized data structures that combine the functionality of Merkle Trees (used for cryptographic proof of data integrity) and Patricia Tries (used for efficient key-value storage).

In Ethereum, Merkle Patricia Trees are used to store and manage three key types of data:

- **Global State Tree:** This tree maps each account address (a key) to its associated account data (a value). It tracks the state of all accounts (both externally owned accounts and smart contracts). Each account’s balance, nonce, storage root, and code hash are stored here.
- **Storage Tree:** Stores data for each account. Smart contract often store variables or arrays in a separate Merkle Patricia Tree for each account. This subtree maps the storage slots (keys) to their values (e.g., contract data).
- **Transaction Tree and Receipts Tree:** Contains all transactions included in a block, ensuring their validity and allowing for quick lookup or verification.

### Role of MPT in Organizing and Securing Data on the Ethereum Blockchain

- **Cryptographic Security:** At the heart of MPTs lies the Merkle Tree concept, where each piece of data (leaf node) is hashed and combined with others into a parent hash, forming a tree-like structure. The topmost hash, called the root hash, summarizes the entire tree.
    If even a tiny part of the data changes (e.g., a balance or contract variable), its hash changes, which propagates up the tree and alters the root hash.
    This means the root hash acts like a fingerprint of the entire Ethereum state. It guarantees data integrity because any tampering is immediately detectable.

- **Efficient Data Lookup and Updates:** MPTs use Patricia Tries, a structure optimized for storing and retrieving key-value pairs. These tries allow for:

  - *Quick Lookups:* To find an account or a smart contract variable, the EVM follows the tree structure using the key as a guide.
  - *Partial Updates:* When a part of the state changes (e.g., a user sends Ether), the MPT only updates the relevant branches, not the entire tree. This reduces computational overhead and speeds up updates.
    
- **Optimizing Storage for Ethereum's State:** The EVM’s state is dynamic—it changes constantly as transactions are processed. Without a system like the MPT, the data would become chaotic and unmanageable. MPTs help by:

    - *Organizing the State:* The MPT ensures that all accounts, contracts, and storage variables are neatly arranged and easy to access.
    - *Handling Growth:* As Ethereum grows, the MPT’s structure ensures scalability by avoiding duplication and optimizing storage space.
    - *Supporting Light Clients:* Light clients (which don’t store the full blockchain) can verify transactions and states using the root hash without needing the full tree.

