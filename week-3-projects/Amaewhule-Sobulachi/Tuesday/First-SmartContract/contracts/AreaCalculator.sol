// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract AreaCalculator {
function AreaOfTriangle(uint _base , uint _height) public pure returns(uint){
    return (_base * _height)/2;

}
 
function AreaOfRectangle(uint length , uint breadth) public pure returns(uint){

    return length * breadth ;
}

function AreaOfSquare(uint side1) public pure returns (uint){

    return side1 ** 2 ;
}

}

