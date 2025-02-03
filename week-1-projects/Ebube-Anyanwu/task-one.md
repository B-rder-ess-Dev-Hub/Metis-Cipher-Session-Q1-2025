# Week 1 Tasks
## Part One
 ### 10 real-world examples of how blockchain is being used in different industries and how blockchain adds value in these use cases.
 
 Bitcoin and cryptocurrency may have been the first widely known uses of blockchain technology, but today, blockchain is revolutionizing almost every industry. Here are somee practical examples of blockchain technology.


**Finance**
1. [Bitsave Protocol](https://bitsave.cryptosmartnow.io/): This Multi-Chain savings protocol is a decentralized application, created by Crypto Smart, and designed to help users save in crypto without losing their assets to the volatility of the crypto market.
 
 **Entertaiment:** 
 
 2. Blockchain is being used by a company know as [Guts](https://guts.tickets/) to issue honest tickets that put an end to disgraceful secondary market prices and ticket fraud.
 3.  [Spotify](https://techcrunch.com/2017/04/26/spotify-acquires-blockchain-startup-mediachain-to-solve-musics-attribution-problem/) acquired blockchain startup Mediachain to solve music’s attribution problem via a decentralized database to better connect artists and licensing agreements with the tracks on Spotify’s service.

**Supply Chain** 
 
 4. [IBM Blockchain](https://www.ibm.com/blockchain-supply-chain): Blockchain for supply chains allows transparency with a shared record of ownership and location of parts and products in real time allowing businesses keep track of the status and condition of every product on their supply chain.
 5.  [Provenance](https://www.provenance.org/news-insights/blockchain-the-solution-for-transparency-in-product-supply-chains) uses blockchain to provide chain-of-custody and certification of supply chains allowing consumers to be sure that the sourcing of materials and production of the products they consume adhere to their individual values
 6. [OriginTrail](https://origintrail.io/) - platform that lets consumers know where their purchases came from and how they were produced - does something similar to Provenance

  **Insurance** 
 
 7. [Proof of insurance](https://www.insurancejournal.com/news/national/2017/12/27/475346.htm): Insurance companies are currently testing a blockchain solution to provide proof-of-insurance information called RiskBlock. Ultimately, when this tool is fully deployed it will help law enforcement, insured and insurers verify insurance coverage in real time and accelerate claims processing.


**Real Estate** 
 
 8. [Ubiquity](https://www.ubitquity.io/web/index.html): This Software-as-a-Service (Saas) blockchain platform offers a simpler user experience to securely record property information to ensure a clean record of ownership. 


 **Charity** 
 
 9. [BitGive](https://www.bitgivefoundation.org/about-us/): This gloabal donation platform leverages Bitcoin and blockchain technology to provide greater transparency to donors by sharing real-time financial and project information.

**Health Care** 
 
 10. [MedicalChain](https://medicalchain.com/en/): The first healthcare company using blockchain technology to facilitate the storage and utilization of electronic health records in order to deliver a complete telemedicine experience. They are real practicing doctors in the UK healthcare structure.

***
## Part Two
### Components of a blockchain
- Smart Contracts
- Consensus Mechanism
- Distrubuted Ledger
- Blocks
- Peer-to-Peer Network
- Governace mechanism
- Native cryptocurrency
- Cryptographic component

### How to track a transaction on the blockchain using [Etherscan](https://etherscan.io/).

Etherscan is a Block Explorer and Analytics Platform for Ethereum blockchain. To track a transaction, the first thing to do is go to the Etherscan website i.e [etherscan.io](https://etherscan.io/) then in the search bar, paste the transaction hash for the transaction you intend to track. The transaction hash is a unique identifier and begins with "0X". Pressing enter will display detailed information about the transaction, including the sender and receiver addresses, amount transferred, gas price, transaction status, block number, and timestamps. 
***

## Part Three
### Why Decentralization is important in blockchain.
In blockchain technology, decentralization refers to the transfer of control and decision-making from a centralized entity to a distributed network, this way, no single point of failure can jeopardize the system. Why is it important?

Blockchains are decentralized for a few important reasons that make them better and more reliable.

Firstly, decentralization makes the system more secure because data is spread across many computers, not just one central place. This way, even if one computer is attacked, the rest of the system stays safe.

Secondly, it makes everything more transparent because everyone in the network can see and check the same information, which helps prevent fraud. Once something is added to the Blockchain, it’s really hard to change or erase, so the records are permanent and trustworthy.

Decentralization also means there’s less need for middlemen like banks, which can save money and make transactions faster.

Lastly, if some computers go offline or have problems, the network can still keep running smoothly because it doesn’t rely on a single point of control. Overall, decentralization makes blockchains more secure, clear, and resilient.

### How does blockchain ensure transparency and security?
Blockchain ensures transparency through decentralization and ensure security through cryptography.

Transparency is achieved by utilizing a decentralized ledger where all transactions are recorded across multiple nodes (computers) in the network. Each node maintains a complete copy of the blockchain, ensuring that no single entity can manipulate data without detection. Other ways to ensure transparency include the use of immutable records of transactions, Consensus mechanism etc.

The security of blockchain is underpinned by cryptographic hashing, which assigns each block a unique digital fingerprint based on its contents. If any data within a block is altered, the corresponding hash changes, making tampering immediately evident. Furthermore, each block contains the hash of the previous block, linking all blocks together in a chain. This structure means that altering one block would require recalculating the hashes of all subsequent blocks, a computationally prohibitive task in large networks. Decentralization plays a crucial role in security by eliminating a single point of failure. Compromising the blockchain would require gaining control over a majority of the network nodes simultaneously, a feat that is practically unachievable in well-established networks. Transactions are also secured through encryption and digital signatures, with public and private keys ensuring that only the owner of a private key can authorize a transaction. Digital signatures provide proof of transaction validity while maintaining the privacy of sensitive information.


## Part Four
### Differences Between Bitcoin and Ethereum in terms of Purpose and Functionality.
in terms of purpose, Bitcoin, created in 2009 by an anonymous entity known as Satoshi Nakamoto, was designed primarily as a decentralized digital currency. Its primary goal is to enable peer-to-peer financial transactions without the need for intermediaries such as banks. Bitcoin’s blockchain focuses on securely recording transactions and maintaining a fixed supply of 21 million bitcoins, ensuring scarcity and protecting against inflation. Its relatively simple design makes it ideal for serving as a store of value, often referred to as "digital gold," and as a medium of exchange.

Ethereum, on the other hand, was launched in 2015 by Vitalik Buterin and others as a more versatile blockchain platform. While it also supports cryptocurrency (Ether, or ETH), Ethereum’s primary purpose extends beyond digital payments. It was designed as a decentralized platform for executing smart contracts and building decentralized applications (dApps). Smart contracts are self-executing agreements with the terms directly written into code, enabling complex transactions and processes to occur automatically when certain conditions are met. This functionality has made Ethereum the foundation for various use cases, including decentralized finance (DeFi), non-fungible tokens (NFTs), and supply chain management.

In terms of functionality,  Bitcoin operates on a simpler scripting language tailored to handle transactions, making it highly secure but limited in programmability. In contrast, Ethereum’s Turing-complete programming language, Solidity, allows developers to create a wide range of applications and protocols. Ethereum also differs in its approach to blockchain upgrades and scalability. It has undergone significant changes, such as the shift to Ethereum 2.0, which introduced a Proof of Stake (PoS) consensus mechanism to improve energy efficiency and transaction throughput. Bitcoin, however, remains committed to its original Proof of Work (PoW) model, prioritizing security and decentralization over scalability.

### Layer 2 Solutions and how they improve blockchain scalability
Layer-2 solutions (L2s) are secondary protocols built on top of a blockchain. Their purpose is to address scalability issues, improve transaction speeds, and reduce fees while inheriting the base layer’s security and decentralization.. In the case of Bitcoin, some L2s also introduce smart contract capabilities, thereby expanding Bitcoin's potential use cases. L2s achieve this by offloading the heavy computation associated with transaction execution from the base layer (the L1). They execute many transactions and batch them together. They then produce a result (either a proof or a compressed version of the transactions—more on that later) and send it to L1 for settlement. By processing transactions as batches rather than one at a time, L2s enable faster and cheaper transactions, enhancing the overall scalability of the blockchain ecosystem. Types of layer2 solutions include State channels, Roll uos and Side Chains.

#### Two Examples of Layer 2 Solutions and how they Work
1. [Starknet](https://www.starknet.io/) is a Validity-Rollup (aka ZK-Rollup) Layer 2 network that operates on top of Ethereum, enabling dApps to massively scale without compromising on security. It achieves this by bundling transactions into an off-chain computed STARK proof. This proof is then submitted to Ethereum as a single transaction, resulting in significantly higher throughput, faster processing times, and much lower costs, all while retaining the robust security of the Ethereum settlement layer.
2. [Metis](https://www.metis.io/) is a Layer-2 scaling solution built on Ethereum, essentially acting as a secondary network that offloads transactions from the main Ethereum blockchain, allowing for faster and cheaper transactions while still maintaining security by leveraging Ethereum's consensus mechanism; it functions through a system called "optimistic rollups" where transaction data is compressed and sent to Ethereum in batches, significantly reducing the network load and enabling high transaction throughput.

