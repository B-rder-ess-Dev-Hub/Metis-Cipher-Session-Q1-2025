# Week 1 Tasks

Submission for the Metis Cipher Session Q1 2025 Week 1 tasks

## Part One

### Real World examples of blockchain im different industries

1. **Finance:**
Example: Bank of America's blockchain-based settlement system
Value: Reduces settlement time from days to hours, increasing efficiency and reducing costs

2. **Healthcare:**
Example: Medibloc's blockchain-based medical records management system
Value: Ensures secure and transparent storage of medical records, improving patient care and reducing administrative costs

3. **Supply Chain:**
Example: Maersk's blockchain-based shipping and logistics management system
Value: Enhances supply chain transparency, reduces counterfeiting, and improves shipping efficiency

4. **Government:**
Example: Estonia's blockchain-based digital identity management system
Value: Ensures secure and transparent management of digital identities, improving citizen services and reducing identity theft

5. **Voting Systems:**
Example: West Virginia's blockchain-based voting system
Value: Enhances voting security, reduces the risk of tampering, and improves voter confidence

6. **Intellectual Property:**
Example: IBM's blockchain-based intellectual property management system
Value: Ensures secure and transparent management of intellectual property rights, reducing counterfeiting and improving innovation

7. **Food Safety:**
Example: Walmart's blockchain-based food safety management system
Value: Enhances food safety, reduces the risk of contamination, and improves supply chain transparency

8. **Energy Trading:**
Example: WePower's blockchain-based energy trading platform
Value: Enables peer-to-peer energy trading, reduces energy costs, and promotes renewable energy adoption

9. **Real Estate:**
Example: Ubitquity's blockchain-based real estate management system
Value: Enhances property ownership security, reduces the risk of title fraud, and improves property transfer efficiency

10. **Cybersecurity:**
Example: Guardtime's blockchain-based cybersecurity platform
Value: Provides real-time threat detection, reduces the risk of cyber attacks, and improves incident response efficiency


## Part Two 

### Components of a Blockchain

Ethereum is a popular blockchain platform that allows for the creation of smart contracts and decentralized applications (dApps). Based on Ethereum's architecture, the components of a blockchain can be identified as follows:

1. **Blocks:** A block is a collection of transactions that are verified and grouped together to form a single unit. In Ethereum, each block is identified by a unique hash, called the block hash.

2. **Transactions:** A transaction is a single operation that is executed on the blockchain, such as sending cryptocurrency or executing a smart contract. Transactions are verified and grouped into blocks.

3. **Blocks Header:** The block header contains metadata about the block, including:
  - Block hash: A unique hash that identifies the block.
  - Parent hash: The hash of the previous block in the chain.
  - Merkle root: A hash of all the transactions in the block.
  - Timestamp: The time at which the block was mined.
  - Difficulty target: The target difficulty for mining the block.
  - Nonce: A counter that is used to ensure that the block hash meets the difficulty target.

4. **Miners:** Miners are nodes on the network that compete to solve a mathematical puzzle to validate a block of transactions. The first miner to solve the puzzle gets to add the block to the blockchain and is rewarded with cryptocurrency.

5. **Consensus Algorithm:** Ethereum uses the Proof of Work (PoW) consensus algorithm, which requires miners to solve a mathematical puzzle to validate blocks. The puzzle is designed to be computationally expensive, but easy to verify.

6. **Network:** The Ethereum network is a decentralized network of nodes that work together to validate and propagate transactions.

7. **Smart Contracts:** Smart contracts are self-executing contracts with the terms of the agreement written directly into lines of code. They can be deployed on the Ethereum blockchain and executed automatically when certain conditions are met.

8. **Gas:** Gas is a unit of measurement for the computational effort required to execute a transaction or smart contract on the Ethereum network.

9. **State Tree:** The state tree is a data structure that stores the current state of the blockchain, including the balance of each account and the execution state of smart contracts.

10. **EVM (Ethereum Virtual Machine):** The EVM is a virtual machine that executes smart contracts and transactions on the Ethereum blockchain.

### How to track a transaction on the blockchain

**Tracking a Transaction on Etherscan**

1. **Go to Etherscan:** Visit www.etherscan.io in your web browser.

2. **Enter the Transaction Hash:** In the search bar, enter the transaction hash you want to track. You can find the transaction hash in the 
transaction details or in the blockchain explorer itself.

3. **Search Results:** Click the "Search" button to retrieve the search results. The results will show a list of transactions that match the transaction hash.

4. **Transaction Details:** Click on the transaction hash to view the transaction details. The transaction details will show the following information:
 - Transaction Hash: The unique identifier for the transaction.
 - Block Number: The block number where the transaction was included.
 - Block Hash: The hash of the block where the transaction was included.
 - From: The sender's address.
 - To: The recipient's address.
 - Value: The amount of Ether sent.
 - Gas: The amount of gas used to execute the transaction.
 - Gas Used: The actual amount of gas used to execute the transaction. Gas Price: The price of gas used to execute the transaction.
 - Timestamp: The timestamp when the transaction was mined.

5. **Transaction History:** Click on the "Transaction History" tab to view the transaction history for the sender and recipient addresses.

6. **Block Explorer:** Click on the "Block Explorer" tab to view the block details, including the block hash, block number, and transactions included in the block.

**Understanding the Transaction Details**

 - Transaction Hash: A unique identifier for the transaction.
 - Block Number: The block number where the transaction was included.
 - Block Hash: The hash of the block where the transaction was included.
 - From: The sender's address.
 - To: The recipient's address.
 - Value: The amount of Ether sent.
 - Gas: The amount of gas used to execute the transaction.
 - Gas Used: The actual amount of gas used to execute the transaction.
 - Gas Price: The price of gas used to execute the transaction.
 - Timestamp: The timestamp when the transaction was mined.


## Part Three 

### Importance of Decentralization in Blockchain

Decentralization is a core concept in blockchain technology. It refers to the distribution of power and control across a network, rather than being held by a single entity. This allows for greater security, transparency, and resilience, as there is no central point of failure.
Decentralized networks help in reducing the level of trust participants must place in each other to execute transactions.

#### Key benefits of decentralization in blockchain:

1. **Security:** With no central authority, it's more difficult for hackers to target a single point of control.
2. **Transparency:** All transactions are recorded on a public ledger, making it easier to track and verify information.
3. **Resilience:** The network can continue to function even if some nodes go offline, as the data is distributed across multiple locations.


### How Blockchain Ensures Transparency and Security

#### Blockchain ensures transparency and security through several mechanisms:

1. **Immutable Ledger:** A public, distributed ledger that records all transactions in a sequential and tamper-proof manner.

2. **Cryptography:** Transactions are encrypted and linked to previous blocks using complex algorithms, making it difficult for hackers to alter or manipulate data.

3. **Consensus Mechanisms:** Network participants verify and agree on the validity of transactions, ensuring that the ledger remains accurate and up-to-date.

4. **Decentralized Network:** The data is stored on multiple nodes across the network, making it difficult for a single entity to manipulate or control the information.

5. **Smart Contracts and automation:** Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically execute when predefined conditions are met, eliminating the need for intermediaries.


## Part Four

### Differences between Bitcoin and Ethereum

#### Bitcoin and Ethereum are two of the most well-known blockchain networks, but they serve different purposes and have distinct functionalities.

|           | **Bitcoin**                       | **Ethereum**                      |
|-----------------------|-----------------------------------|------------------------------------|
| **Purpose**           | Bitcoin is primarily a digital currency, designed for peer-to-peer transactions and a store of value. | Ethereum is a decentralized platform for building and deploying smart contracts and decentralized applications (dApps). |
| **Functionality**     | Bitcoin's primary function is to facilitate fast, secure, and low-cost transactions between parties, using its native cryptocurrency, BTC. | Ethereum's primary function is to enable the creation and execution of complex smart contracts, which can automate various tasks, from simple transactions to complex business logic.|


## Key differences

1. **Smart Contract Support:** Ethereum has a built-in Turing-complete programming language, Solidity, which allows developers to create complex smart contracts. Bitcoin does not have this capability.

2. **Decentralized Applications (dApps):** Ethereum is designed to support the development of dApps, which can run on the blockchain. Bitcoin is not suitable for this purpose.

## Use Cases 
Bitcoin is primarily used for transactions, while Ethereum is used for a wide range of applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and gaming.


### Layer 2 Solutions

Layer 2 solutions are a type of scaling technology built on top of an existing blockchain (Layer 1) that aims to increase the scalability of blockchain networks by moving certain processes off the main chain. This can help reduce congestion, increase transaction capacity, and improve overall network performance.


**How Layer 2 Solutions Improve Scalability in Blockchain:**

1. **Off-Chain Transactions:** Layer 2 solutions enable transactions to be processed off the main chain, reducing the number of transactions that need to be verified and written to the blockchain.

2. **Reduced Congestion:** By moving transactions off the main chain, Layer 2 solutions can help reduce congestion and increase the overall performance of the network.

3. **Increased Capacity:** Layer 2 solutions can increase the capacity of the network by allowing for more transactions to be processed in a given time period.


**Examples of Layer 2 Solutions:**

1. **Metis**
Metis is a Layer 2 scaling solution that uses a combination of off-chain transactions and rollups to increase the scalability of Ethereum.

**How it Works:** Metis uses a technique called "rollups" to aggregate multiple transactions into a single batch, which is then processed on the main chain. This reduces the number of transactions that need to be verified and written to the blockchain.

**Benefits:** Metis can increase the scalability of Ethereum by up to 100x, making it a promising solution for decentralized applications (dApps) that require high transaction capacity.

2. **Optimism**
Optimism is another Layer 2 scaling solution that uses a technique called "rollups" to increase the scalability of Ethereum.

**How it Works:** Optimism uses a rollup solution called "Optimistic Rollups" to aggregate multiple transactions into a single batch, which is then processed on the main chain. This reduces the number of transactions that need to be verified and written to the blockchain.

**Benefits:** Optimism can increase the scalability of Ethereum by up to 100x, making it a promising solution for decentralized applications (dApps) that require high transaction capacity.


