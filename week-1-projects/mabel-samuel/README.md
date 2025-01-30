# Week 1 Tasks

Here's my submission for the Metis Cipher Session Q1 2025 Week 1 tasks.

## Part One

### Real-world examples of blockchain usage in different industries
A blockchain is a decentralized ledger storing a growing list of digital records, known as blocks, which are linked together through cryptography. Each block contains a unique cryptographic hash of the previous block, a timestamp, and transaction details. This system is shared across many computers, ensuring that no single entity controls the data.
Blockchain core characteristics include decentralization, transparency, immutability, and automation. This characteristics are applied in different industries creating a plethora of use cases.

**Blockchain in Healthcare**

Blockchain usage in healthcare reduces healthcare costs, improve access to information across stakeholders and streamline business processes. It enables faster, more efficient, and more secure medical data management and medical supply tracking. For healthcare providers, blockchain can also store and credentials, certifications and licences on a distributed ledger, supporting verification processes and mitigating any potential forgeries.
1. [Medicalchain](https://medicalchain.com/en/) uses blockchain to store patient health records securely. This allows patients to control access and share their medical data with healthcare providers.
2. [IBM](https://www.ibm.com/case-studies/global-pharmaceuticals-company), a pharmaceutical company track drug production and distribution with the help of blockchain, ensuring transparency and reducing counterfeit medications.
3. [Novo Nordisk](https://www.novonordisk-us.com/) is a global pharmaceutical and biotechnology company specializing in developing treatments for chronic diseases such as obesity, Alzheimer’s and diabetes. Leveraging advanced technologies like AI and machine learning, the company focuses on protein modeling and innovative therapeutic solutions to address these conditions. It uses blockchain technology in its extensive clinical trials to collect and secure patient data.

**Blockchain in Government**

The unalterable and transparent nature of blockchain can significantly enhance government operations. Blockchain use cases for public operations serve as solutions for secure identity management, transparent voting systems, and efficient public records management, transforming how governments function.

4. [Follow My Vote](https://followmyvote.com/) is a secure online voting platform using an open-source virtual blockchain ballot box. The technology decreases spending on physical ballots and can be accessed via any device. Follow My Vote implements the end-to-end tools that elections need in order to provide total safety and confidence in the voting process.
5. [Voatz](https://voatz.com/) is a mobile voting platform that runs on blockchain. The encrypted biometric security system makes it secure to vote on a mobile device from anywhere in the world without fear of hacking or data corruption. West Virginia is one of the first states to use Voatz to collect votes from eligible service people and travelers abroad during elections.

**Blockchain in Supply Chain and Logistics**

In supply chain and logistics, it amplifies transparency and tracking, ensuring the authenticity of products.

6.  [Maersk](https://www.maersk.com/) provide real-time visibility and data sharing across global logistics with blockchain-based platforms.
7. [FedEx](https://www.fedex.com/) is one of the logistics businesses that use blockchain successfully. They implement smart contracts for process automation, ensuring faster deliveries and reduced paperwork.

**Blockchain in Education**

The education sector leverages cutting-edge technologies to securely store academic credentials and improve verification processes.

8.  [The University of Nicosia](https://www.unic.ac.cy/) issues academic certificates on the blockchain, allowing employers or institutions to verify qualifications instantly.

9. [MIT](https://www.mit.edu/) uses blockchain to issue tamper-proof diplomas, which allows graduates to share verified credentials with potential employers.

**Blockchain in Media**

Blockchain can address issues like content piracy, intellectual property protection, and royalty distribution in the media industry.

10. [Audius](https://audius.co/), a decentralized music streaming platform, uses distributed ledgers to ensure artists receive fair compensation and royalties directly, bypassing traditional intermediaries.

## Part Two

### Components of a Blockchain

1. **Nodes:** They are computers or servers connected to the network, each holding a copy of the distributed ledger and validating transactions and blocks. Nodes enforce blockchain protocol rules and maintain system integrity and security.
Types of nodes include:
    - Full Nodes:
    Full Nodes are the backbone of a Blockchain, storing the entire ledger’s history. They validate all blocks and transactions, ensuring network security and integrity. Full nodes independently verify transactions without relying on other nodes’ trustworthiness.

    - Light Nodes (or Light Clients):
    Light nodes store only block headers, verifying transactions without the full Blockchain. This makes them ideal for devices with limited storage, like mobile phones or personal computers. 

    - Archival Nodes: 
    Similar to full nodes, they store all historical Blockchain states since inception. Archival nodes enable querying historical data, supporting complex analysis, and retrospective audits.

2. **Distributed Ledger:** is part of the key logical components of a blockchain ecosystem. It is essentially a ledger spread across all nodes in the network. It’s a shared database replicated and synchronized among all peers. Its most notable feature is decentralization. Updating the ledger requires each node to process the transaction and agree on the ledger’s accuracy.

3. **Cryptographic Hashing:** Hash functions are used to secure data, create block identifiers, and maintain data integrity. Ethereum uses Keccak-256 (a variant of SHA-3) to generate cryptographic hashes for transactions, blocks, and accounts.

4. **Consensus Mechanism:** A method to agree on the validity of transactions and block creation across the network. Ethereum initially used *Proof of Work (PoW)*. In PoW, Miners solved computational puzzles to validate transactions and create new blocks. Ethereum eventually transitioned to *Proof of Stake (PoS)* with Ethereum 2.0 (The Merge). In PoS, Validators stake ETH to propose and validate blocks, improving energy efficiency and scalability.

5. **Ethereum Virtual Machine (EVM):** A decentralized runtime environment for executing smart contracts. It processes instructions and manages the states of digital smart contracts, ensuring contract terms are enforced.

6. **Smart Contracts:** Self-executing contracts with the terms of the agreement directly written into code. Smart contracts are written in programming languages like Solidity. Deployed on the Ethereum Virtual Machine (EVM), these contracts execute automatically when predefined conditions are met.

7. **Blocks:** Data structures containing transaction data, metadata, and links to previous blocks.
Each block includes:
    - Block Header: Contains metadata like the block hash, parent hash, and timestamp.
    - Transactions: List of transactions included in the block.
    - State Root: Represents the Merkle root of the global state.
    - Gas Used: Tracks computational resources consumed.

8. **Gas and Fees:** The cost of computational resources required to process transactions or execute smart contracts. Transactions and contract executions require gas, denominated in gwei (a fraction of ETH). The base fee is determined dynamically for each block, and users can include tips for faster processing.

9. **Wallets:** Interfaces that allow users to interact with the blockchain, send/receive funds, and interact with smart contracts. Examples: MetaMask, MyEtherWallet.
Wallets generate private-public key pairs, enabling users to sign transactions securely.

10. **Accounts:** Entities that can send transactions and hold assets. 
    - *Externally Owned Accounts (EOAs)*: Controlled by private keys, used by individuals.
    - *Contract Accounts*: Controlled by smart contract code, executing predefined logic.

11. **Decentralized Applications (DApps):** Applications built on the blockchain using smart contracts.
Examples: DeFi platforms (Uniswap, Aave), NFT marketplaces (OpenSea), and DAOs (Decentralized Autonomous Organizations).

12. **Blockchain State:** The collective record of all accounts, balances, and smart contract states at a given time.
In ethereum, the state is stored in the form of a *Merkle Patricia Trie*, which optimizes data retrieval and ensures data integrity.

13. **Tokens:** Digital assets created and managed on the blockchain.
    - ERC-20 Tokens: Fungible tokens like USDT or DAI.
    - ERC-721 Tokens: Non-fungible tokens (NFTs).
    - ERC-1155 Tokens: Multi-token standard supporting fungible and non-fungible tokens.

14. **Block Explorer:** Tools that allow users to view blockchain data.
Example: Etherscan provides details about transactions, blocks, and accounts.


### How to track a transaction on the blockchain

1. **Choose a Blockchain Explorer:** Select a trusted blockchain explorer, such as [etherscan](etherscan.io), to ensure secure and accurate information.
2. **Obtain the TXID or Public Address:** To track a transaction, you’ll need either the TXID(transaction ID) or the public address associated with the transaction. You can also use the block, domain name or token.
3. **Enter the TXID or Address:** Input the TXID or address or block or domain name or token into the blockchain explorer’s search bar, and hit “Enter” to view transaction details.
4. **View Transaction Status and Details:** The explorer will display information about the transaction, including the sending and receiving addresses, confirmation count, and transaction fee.
5. **Monitor the Confirmation Status:** Track the confirmation count to determine when the transaction is fully processed. Generally, six confirmations are the standard for secure transactions.

## Part Three

### Importance of Decentralization in Blockchain

Decentralization in blockchain is the transfer of supervision and decision-making from a centralized association (individual, corporation, or group of people) to a dispersed network. 
Decentralized networks help in reducing the level of trust participants must place in each other to execute transactions. 
The most important addition among decentralization benefits is the ability to fight against abuse of power. By placing power in the hands of all stakeholders, decentralization enables a more democratic approach to the use of technology. It empower individuals by granting them greater autonomy, ownership, and control over their digital assets and interactions. In decentralized finance (DeFi), for example, users can access financial services such as lending, borrowing, and trading without relying on traditional intermediaries like banks or brokerage firms. This democratization of finance enables greater financial inclusion and access to opportunities for individuals worldwide, particularly those underserved by traditional banking systems.

### How Blockchain Ensures Transparency and Security

1. **Immutable and Decentralized Ledger:** Unlike traditional centralized systems, where a single entity controls the ledger, blockchain operates on a network of nodes that validate and record transactions. Once a transaction is added to the blockchain, it becomes virtually impossible to alter or delete. This immutability ensures the integrity of the transaction history, making it resistant to fraud or tampering.

2. **Cryptography and Public-Private Key Pairs:** Blockchain relies heavily on cryptographic techniques to secure transactions. Users have a pair of cryptographic keys: a public key (used as an address) and a private key (used to sign transactions). When a user initiates a transaction, their private key is used to create a digital signature. This signature, along with the transaction details, is then verified by other network participants using the sender's public key. This process ensures that only the rightful owner of the private key can authorize and initiate transactions, enhancing security. 

3. **Consensus Mechanisms:** Blockchain networks employ consensus mechanisms to validate and agree on the state of the ledger. The two most common mechanisms are Proof of Work (PoW) and Proof of Stake (PoS). In PoW, miners compete to solve complex mathematical puzzles, requiring computational effort and energy consumption. The first one to solve the puzzle validates the transaction and adds a new block to the chain. PoS, on the other hand, involves validators who are chosen to create new blocks based on the amount of cryptocurrency they hold and are willing to "stake" as collateral. These mechanisms ensure that transactions are verified by a majority of participants, reducing the risk of malicious actors and enhancing transparency.

4. **Smart Contracts and automation:** Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically execute when predefined conditions are met, eliminating the need for intermediaries. This automation not only reduces the risk of human error but also ensures that the terms of the contract are executed exactly as agreed upon, enhancing transparency and security. An example is the use of smart contracts in real estate, where the blockchain automatically transfers property ownership upon the fulfillment of contract conditions.

## Part Four

### Differences between Bitcoin and Ethereum

| **Aspect**           | **Bitcoin**                       | **Ethereum**                      |
|-----------------------|-----------------------------------|------------------------------------|
| **Purpose**          | Acts as a secure, peer-to-peer payment system and a store of value, often referred to as "digital gold." | Goal is to enable developers to create and run decentralized applications (dApps) and execute smart contracts that automate complex transactions and processes.  |
| **Core Philosophy** | Bitcoin emphasizes security, immutability, and decentralization above all else. Its development is conservative, prioritizing stability and reliability for financial transactions. | Ethereum emphasizes flexibility and innovation. It aims to provide a "world computer" that developers can use to build programmable decentralized solutions for a variety of use cases. |
| **Blockchain Focus**| Bitcoin’s blockchain is purpose-built to securely record transactions involving its native cryptocurrency, BTC. It is optimized for transferring value and ensuring financial integrity. | Ethereum’s blockchain is designed as a platform for executing smart contracts and hosting decentralized applications. It allows users to create programmable tokens, DeFi platforms, NFTs, and more. |
| **Smart Contract Support** | Bitcoin has limited scripting capabilities and does not natively support advanced smart contracts. Simple scripts can be used for tasks like multi-signature wallets. | Ethereum natively supports smart contracts, which are self-executing agreements that run automatically when predefined conditions are met. These contracts are written in Ethereum’s programming language, Solidity. |
| **Supply**          | Bitcoin has a fixed supply of 21 million BTC, making it inherently deflationary. This scarcity reinforces its role as a store of value. | Ethereum does not have a fixed supply cap. Instead, it has a dynamic monetary policy with periodic adjustments, especially after upgrades like Ethereum 2.0 (e.g., staking rewards, fee-burning mechanisms). |
| **Consensus Mechanism** | Bitcoin uses Proof of Work (PoW), where miners solve computational puzzles to validate transactions and secure the network. This method is energy-intensive but highly secure. | Ethereum transitioned to Proof of Stake (PoS) with Ethereum 2.0. Validators secure the network by staking Ether, which reduces energy consumption while maintaining decentralization and security. |
| **Use Cases**       | Bitcoin is primarily used for financial transactions and as a store of value. Its use cases include cross-border payments, wealth preservation, and an alternative to traditional banking systems. | Ethereum has a wide range of use cases, including DeFi platforms, non-fungible tokens (NFTs), decentralized autonomous organizations (DAOs), token creation (ERC-20), and various dApps for industries like gaming, healthcare, and supply chain management. |
| **Flexibility**     | Bitcoin is intentionally limited in scope, focusing on secure, efficient, and reliable transactions. Its protocol changes are rare and carefully reviewed. | Ethereum is highly flexible and designed to evolve. It continuously adds new features and upgrades (e.g., The Merge, sharding) to expand its capabilities and improve performance. |


### Layer 2 Solutions

Layer 2 solutions are technologies or protocols built on top of an existing blockchain (Layer 1) to improve scalability, reduce transaction costs, and enhance throughput without compromising the security of the base layer. They are designed to handle transactions off-chain or in more efficient ways while still leveraging the underlying blockchain for security and finality.

**How Layer 2 Solutions Improve Blockchain Scalability**

1. **Higher transaction throughput:** By processing transactions offchain, Layer 2 solutions can handle a significantly higher number of transactions per second compared to the main chain.
2. **Reduced transaction costs:** Layer 2 solutions minimize the gas fees associated with onchain transactions, making it more cost-effective for users to interact with the L1.
3. **Faster transaction finality:** Offchain transactions can achieve near-instant finality, providing a better user experience and enabling real-time applications.
4. **Improved privacy:** Some Layer 2 solutions, such as state channels, offer increased privacy by keeping transaction details offchain and only settling the final state on the main chain.

**Examples of Layer 2 Solutions**

1. **Metis:** Metis is an Ethereum Layer 2 scaling solution based on *Optimistic Rollups*, a technology that processes transactions off-chain while relying on Ethereum for security.
In an Optimistic Rollup, transactions are executed off-chain, and the results are periodically bundled into "batches" and submitted to the Ethereum mainnet.
To ensure security, the system assumes transactions are valid by default (hence "optimistic") but allows participants to challenge potentially fraudulent transactions within a specified dispute period.
Metis enhances the traditional Optimistic Rollup by focusing on usability for decentralized applications (dApps) and offering built-in features for decentralized autonomous companies (DACs) to simplify building on Layer 2.

2. **Lightning Network (Payment Channels):** The Lightning Network is a Layer 2 scaling solution for Bitcoin, designed to enable instant, low-cost transactions through the use of payment channels.
Users open a payment channel by locking a certain amount of Bitcoin in a multi-signature wallet. Once the channel is open, participants can conduct unlimited transactions off-chain by simply updating the balances in the channel.
When the participants close the channel, the final balances are broadcast to the Bitcoin blockchain for settlement.
This approach significantly reduces the number of on-chain transactions, preserving the blockchain's capacity for larger settlements.
