# Week 4 Tasks

## Verified Contract Address

**Contract address**

Here is the verified [voting contract address](https://sepolia-explorer.metisdevops.link/address/0xCbBC75BCaB7cF020Bf49940BB4BA8b8040614e5b#code).

## Overflow and Underflow in Solidity

Overflow and Underflow are common issues in programming generally, including solidity that arise when the result of an arithmetic operation exceeds the maximum or minimum value that can be represented by the data type leading to serious consequences like  unexpected behavior or vulnerabilities in smart contracts.

### Overflow

Overflow occurs when the result of an arithmetic operation exceeds the maximum value that can be represented by the data type. In Solidity, integers are represented using fixed-size data types like `uint256` (unsigned integer with 256 bits) or `int256` (signed integer with 256 bits). If the result of an addition, multiplication, or any other arithmetic operation exceeds the maximum value that can be stored in the data type, an overflow occurs.

In simple words, overflow is a situation when uint (unsigned integer) reaches its byte size. Then the next element added will return the first variable element.

Let’s say we have a `uint8`, which can only have 8 bits. That means the largest number we can store is binary 11111111 (in decimal 2^8 - 1 = 255).

```
uint8 balance = 255;
balance++;
```

If you execute the code above the "balance" will be 0. This is a simple example of overflow. If you add 1 to binary 11111111, it resets back to 00000000.

Now when you store 256 in a uint8 variable, it will overflow and the value will become 0, if you store 257 it will become 1, for 258 it will become 2, and so on. In simple terms when an integer overflow occurs, the value of the integer variable will be reset to the minimum value that can be stored in that variable plus the exceeded value.

### Underflow

Underflow occurs when the result of an arithmetic operation goes below the minimum value that can be represented by the data type. This typically happens with subtraction or division operations.

Let’s take an example of uint8 in solidity, the minimum value allowed in uint8 is 0. If you try to store -1 in the uint8 variable the value of the variable will become 255, and so on as it will underflow.

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.7.0;

contract RolloverExample {
    uint8 public myUint8;

    function decrement() public {
        myUint8--;
    }

    function increment() public {
        myUint8++;
    }
}
```

This is where Libraries like SafeMath were invented.

### Solidity 0.8 Difference

In Solidity 0.8, the compiler will automatically take care of checking for overflows and underflows. 

You will get an error in the console because it cannot overflow or underflow anymore.

But what if you actually want to overflow or underflow then there is a new `unchecked` block you can wrap your variables around:

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

contract RolloverExample2 {
    uint8 public myUint8;

    function decrement() public {
        unchecked {
            myUint8--;
        }
    }

    function increment() public {
        unchecked {
            myUint8++;
        }
    }
}
```
