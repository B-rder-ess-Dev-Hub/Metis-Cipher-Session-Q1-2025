const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
require("dotenv").config();

module.exports = buildModule("MyTokenModule", (m) => {
    const myToken = m.contract("MyToken");
    return { myToken };
});
