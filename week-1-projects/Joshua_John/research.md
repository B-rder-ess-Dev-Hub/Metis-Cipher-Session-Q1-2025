# Week 1 Tasks - Metis Cipher Session Q1 2025


## **Part One: 10 Real-World Blockchain Use Cases**

Blockchain is a decentralized, secure ledger that records transactions transparently across a network. Its immutability and trustless design eliminate intermediaries, enabling innovation across industries like finance, healthcare, and supply chain. Let’s explore its real-world applications, mechanics, and transformative potential.	

1. **Supply Chain (IBM Food Trust)** : Blockchain tracks food from farm to store, ensuring authenticity and reducing fraud.
2. **Healthcare (MedRec)** : Securely shares patient records across providers while maintaining privacy via encryption.
3. **Finance (DeFi – Aave)** : Enables decentralized lending/borrowing without intermediaries.
4. **Government (Dubai Blockchain Strategy)** : Streamlines visa applications, bill payments, and land registries.
5. **Gaming (Axie Infinity)** : NFTs represent in-game assets owned by players, enabling true digital ownership.
6. **Energy (Power Ledger)** : Peer-to-peer energy trading using blockchain for transparent tracking.
7. **Art & Royalties (Async Art)** : Artists use NFTs to automate royalty payments and prove ownership.
8. **Insurance (Etherisc)** : Automates claims processing via smart contracts (e.g., flight delay payouts).
9. **Charity (GiveTrack)** : Tracks donations transparently to ensure funds reach intended recipients.
10. **Real Estate (Propy)** : Facilitates cross-border property sales with tamper-proof records.


---

## **Part Two: Blockchain Components & Transaction Tracking**

 **Components of Ethereum Blockchain** :

1. **Nodes** : Devices that validate/relay transactions (full nodes, light nodes).
2. **Blocks** : Batches of transactions with timestamps and hashes.
3. **Consensus Mechanism** : Ethereum uses **Proof of Stake (PoS)** for validation.
4. **Smart Contracts** : Self-executing code on the blockchain.
5. **EVM (Ethereum Virtual Machine)** : Executes smart contracts.
6. **Transactions** : Signed messages triggering state changes.
7. **Gas Fees** : Payment for computation/storage.
8. **Wallets** : Tools to manage private keys and interact with the chain.

### **Tracking a Transaction** :

1. Go to [Etherscan](https://etherscan.io/).
2. Paste a transaction hash (TXID) into the search bar.
3. View details: sender/receiver, gas used, block number, status (success/failed).
4. Explain how the transaction is irreversible and timestamped once confirmed.

---

## **Part Three: Decentralization, Transparency & Security**

1. **Why Decentralization?**
   * No single point of control/failure.
   * Resists censorship (e.g., governments can’t shut it down).
   * Trustless: Users don’t need to trust a central authority.
2. **Transparency & Security** :

* **Transparency** : All transactions are public and auditable on the blockchain.
* **Security** : Cryptographic hashing (SHA-256) ensures data integrity. Consensus mechanisms (PoS/PoW) prevent malicious actors from altering the chain.

---

## **Part Four: Bitcoin vs. Ethereum & Layer 2 Solutions**

 **Bitcoin vs. Ethereum** :

| **Aspect**        | **Bitcoin**                  | **Ethereum**                 |
| ----------------------- | ---------------------------------- | ---------------------------------- |
| **Purpose**       | Digital gold/store of value        | Platform for dApps/smart contracts |
| **Consensus**     | Proof of Work (PoW)                | Proof of Stake (PoS)               |
| **Functionality** | Limited scripting (transfers only) | Turing-complete (complex logic)    |

 **Layer 2 Solutions** :

1. **Metis** :

* **How it works** : Optimistic rollup that bundles transactions off-chain and posts proofs to Ethereum. Focuses on low fees and fast transactions.
* **Use case** : Decentralized autonomous companies (DACs) and scalable dApps.

1. **Optimism** :

* **How it works** : Another optimistic rollup; assumes transactions are valid unless challenged. Reduces gas fees by 10–100x.

 **MetaMask Setup** :

1. Install MetaMask (browser extension).
2. Click “Add Network” and enter Metis RPC details:
   * **Network Name** : Metis
   * **RPC URL** : [https://andromeda.metis.io/?owner=1088](https://andromeda.metis.io/?owner=1088)
   * **Chain ID** : 1088
   * **Currency Symbol** : METIS
   * **Block Explorer** : [https://andromeda-explorer.metis.io](https://andromeda-explorer.metis.io/)
