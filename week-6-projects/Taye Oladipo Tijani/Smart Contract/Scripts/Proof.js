import { MerkleTree } from 'merkletreejs';
import fs from 'fs';
import keccak256 from 'keccak256';

// Read the tree.json file
const treeData = fs.readFileSync('tree.json');
const treeJson = JSON.parse(treeData);

// Extract leaf nodes and Merkle root from the tree data
const leafNodes = treeJson.leaves;
const merkleRoot = treeJson.merkleRoot;

// Create the Merkle tree using the data
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

// Log the Merkle root
console.log("Merkle Root:", merkleRoot);

// Generate and log Merkle Proofs for each address in the leaf nodes
leafNodes.forEach((leaf) => {
    const proof = merkleTree.getProof(leaf).map(p => p.data.toString('hex'));
    console.log(`Address: ${leaf.toString('hex')}`);
    console.log(`Proof:`, proof);
});
