import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import fs from 'fs';

// List of whitelisted addresses
const whitelist = [
    "0x1234...abcd",
    "0x5678...efgh",
    "0x9abc...ijkl",
    "0xdef0...mnop"
];

// Convert addresses to leaf nodes (hashed)
const leafNodes = whitelist.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

// Generate Merkle Root
const merkleRoot = merkleTree.getRoot().toString('hex');
console.log("Merkle Root:", merkleRoot);

// Save the tree to a file
const treeData = {
    root: merkleRoot,
    leaves: leafNodes.map(leaf => leaf.toString('hex')),
};
fs.writeFileSync('./tree.json', JSON.stringify(treeData, null, 2));

console.log("Merkle Tree saved to tree.json");
