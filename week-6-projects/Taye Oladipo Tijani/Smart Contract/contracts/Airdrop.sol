// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Airdrop {
    bytes32 public merkleRoot; // Store the Merkle Root
    mapping(address => bool) public claimed; // Track claims

    IERC20 public token; // ERC20 token to be airdropped

    event MerkleRootSet(bytes32 merkleRoot);
    event AirdropClaimed(address indexed claimer, uint256 amount);

    // ✅ Constructor to set Merkle Root at deployment and ERC20 token address
    constructor(bytes32 _merkleRoot, address _tokenAddress) {
        merkleRoot = _merkleRoot;
        token = IERC20(_tokenAddress);
        emit MerkleRootSet(_merkleRoot); // Emit the Merkle Root after it's set
    }

    // ✅ Claim airdrop function that verifies Merkle proof and transfers tokens
    function claimAirdrop(uint256 amount, bytes32[] calldata proof) external {
        // Ensure the address hasn't claimed the airdrop already
        require(!claimed[msg.sender], "Airdrop already claimed");

        // Create the leaf node using the sender's address and the claimed amount
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, amount));

        // Verify the proof with the Merkle root
        require(MerkleProof.verify(proof, merkleRoot, leaf), "Invalid proof");

        // Mark the address as having claimed the airdrop
        claimed[msg.sender] = true;

        // Emit the claim event
        emit AirdropClaimed(msg.sender, amount);

        // Transfer the tokens (if applicable)
        require(token.transfer(msg.sender, amount), "Token transfer failed");
    }

    // ✅ Function to update Merkle Root (in case of changes to the whitelist)
    function updateMerkleRoot(bytes32 _newMerkleRoot) external {
        // Only allow the contract owner to update the Merkle root
        // Add access control (e.g., onlyOwner modifier if using OpenZeppelin Ownable)
        merkleRoot = _newMerkleRoot;
        emit MerkleRootSet(_newMerkleRoot);
    }
}
