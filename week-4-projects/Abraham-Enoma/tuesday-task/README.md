## Verified contract address: 0x911017EBe1E5cA1Edb7D9c61d8f1727289c1275b

![image](https://github.com/user-attachments/assets/b81eebda-0b2f-4e05-a9b5-68709f7e5859)

### Click [here](https://sepolia-explorer.metisdevops.link/address/0x911017EBe1E5cA1Edb7D9c61d8f1727289c1275b#code) to view the deployed contract on Metis Sepolia block explorer

---

# Overflow and Underflow in Solidity

In Solidity, overflow and underflow occur when arithmetic operations exceed the storage limits of a data type:

Overflow happens when a number exceeds its maximum value and wraps around to its minimum value. For example, in an uint8 (which has a range of 0 to 255), adding 1 to 255 results in 0.

Underflow occurs when a number goes below its minimum value and wraps around to its maximum. For example, subtracting 1 from 0 in uint8 results in 255.

From Solidity 0.8.0 onwards, overflow and underflow throw runtime errors instead of wrapping around, preventing unintended behavior.
