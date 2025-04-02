// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Airdrop is Ownable {
    IERC20 public token; 
    bytes32 public merkleRoot;
    uint256 public claimAmount; 
    mapping(address => bool) private _claimed;

    event Claimed(address indexed account, uint256 amount);

    constructor(address _token, bytes32 _merkleRoot, uint256 _claimAmount) Ownable(msg.sender) {
        token = IERC20(_token);
        merkleRoot = _merkleRoot;
        claimAmount = _claimAmount;
    }

    function claim(bytes32[] calldata merkleProof) external {
        require(!_claimed[msg.sender], "Airdrop already claimed");
        require(verify(msg.sender, merkleProof), "Invalid proof");

        _claimed[msg.sender] = true;
        require(token.transfer(msg.sender, claimAmount), "Transfer failed");

        emit Claimed(msg.sender, claimAmount);
    }

    function verify(address account, bytes32[] calldata merkleProof) public view returns (bool) {
        bytes32 leaf = keccak256(abi.encodePacked(account));
        return MerkleProof.verify(merkleProof, merkleRoot, leaf);
    }

    function isEligible(address account, bytes32[] calldata merkleProof) external view returns (bool) {
      return !_claimed[account] && verify(account, merkleProof);
    }

    function hasClaimed(address account) external view returns (bool) {
        return _claimed[account];
    }

    function updateMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        require(_merkleRoot != bytes32(0), "Merkle root cannot be zero");
        merkleRoot = _merkleRoot;
    }

    function updateClaimAmount(uint256 _claimAmount) external onlyOwner {
        require(_claimAmount > 0, "Claim amount must be greater than zero");
        claimAmount = _claimAmount;
    }

    function withdrawUnclaimed() external onlyOwner {
        uint256 balance = token.balanceOf(address(this));
        require(token.transfer(owner(), balance), "Airdrop withdrawal failed");
    }
}
