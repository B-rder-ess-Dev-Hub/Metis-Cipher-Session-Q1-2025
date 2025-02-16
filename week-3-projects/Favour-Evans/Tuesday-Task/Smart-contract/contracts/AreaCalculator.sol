//SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract AreaCalculator {

    function areaOfATriangle(uint base, uint height) public pure returns (uint) {
        return base * height / 2;
    }

    function areaOfARectangle(uint length, uint breadth) public pure returns (uint) {
        return length * breadth;
    }

    function areaOfASquare(uint side) public pure returns (uint) {
        return side * side;
    }

}
