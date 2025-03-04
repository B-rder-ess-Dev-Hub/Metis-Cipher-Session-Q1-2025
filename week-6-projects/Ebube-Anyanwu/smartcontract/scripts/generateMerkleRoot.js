const keccak256 = require('keccak256');
const MerkleTree = require('merkletreejs')

const whitelist = [
    "0xF2aE212BfC755508a088bfADc985Db391bBFDec8",
    "0xfb1573907b4c47A1e367C887Eb7bbB20069963fb",
    "0x50e20E505b173e94A4337F324434eF48AAF2bC7F",
    "0x022792c5bFBfA056b80D38c6B672d6e2918e8673",
    "0x1e7d0d69e047D4Df5996D5382E67485161b33855"
];

const claimAmount = 1000;
const createLeaf = (address, amount) => {
    return keccak256(Buffer.concat([Buffer.from(address.slice(2), 'hex'), Buffer.from(amount.toString())]));
}

const leaves = whitelist.map(address => createLeaf(address, claimAmount));
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const merkleRoot = tree.getRoot().toString('hex');

module.exports = { merkleRoot };