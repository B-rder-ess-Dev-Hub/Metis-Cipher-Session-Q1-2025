const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const fs = require('fs');

const whitelist = [
  "0xd3a790c344ee7ad001624f3f735f666566056168",
  "0x97c152e1d87fcf9edb23671d8b09322b2502eeec",
  "0xa0c7c9461bc40e74a0061122ef806cbe85ffffa7",
  "0xd43da75ccd687cc3e6eda57014436716fcfe7887",
  "0x0842ea79a34e7c5e74ffd173815923dd8df22c3d",
];

function hashAddress(address) {
  return keccak256(address);
}

function generateMerkleTree(addresses) {
  const leaves = addresses.map(addr => hashAddress(addr));
  
  const merkleTree = new MerkleTree(leaves, keccak256, {
    sortPairs: true 
  });
  
  return {
    merkleTree,
    leaves
  };
}

function main() {
  const { merkleTree, leaves } = generateMerkleTree(whitelist);
  
  const rootHash = merkleTree.getRoot();
  const rootHex = '0x' + rootHash.toString('hex');
  
  console.log('Merkle Root:', rootHex);
  
  const merkleData = {
    root: rootHex,
    whitelist: {}
  };
  
  whitelist.forEach((address, index) => {
    const leaf = leaves[index];
    const proof = merkleTree.getProof(leaf);
    const proofHex = proof.map(p => '0x' + p.data.toString('hex'));
    
    merkleData.whitelist[address] = {
      proof: proofHex,
      leaf: '0x' + leaf.toString('hex')
    };
    
    console.log(`\nAddress: ${address}`);
    console.log('Merkle Proof:', proofHex);
    
    const isValid = merkleTree.verify(proof, leaf, rootHash);
    console.log('Proof Verification:', isValid ? 'Valid ✓' : 'Invalid ✗');
  });
  
  fs.writeFileSync(
    'merkle-data.json',
    JSON.stringify(merkleData, null, 2)
  );
  
  console.log('\nMerkle data saved to merkle-data.json');
}

main();