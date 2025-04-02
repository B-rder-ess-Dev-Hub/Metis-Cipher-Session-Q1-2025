// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OzelToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Ozel", "OZ") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}
