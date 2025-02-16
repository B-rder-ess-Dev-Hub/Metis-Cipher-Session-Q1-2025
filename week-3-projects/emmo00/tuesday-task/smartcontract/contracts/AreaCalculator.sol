// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Author: Emmanuel Nwafor (Emmo00)
contract AreaCalculator {
    constructor() {}

    function triangle(
        uint256 base,
        uint256 height
    ) public pure returns (uint256) {
        return (base * height) / 2;
    }

    function rectangle(
        uint256 length,
        uint256 breath
    ) public pure returns (uint256) {
        return length * breath;
    }

    function square(uint256 side) public pure returns (uint256) {
        return side * side;
    }
}