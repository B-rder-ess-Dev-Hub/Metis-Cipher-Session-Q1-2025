const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AreaCalculatorModule", (m) => {
    const AreaCalculator = m.contract("AreaCalculator");

    return { AreaCalculator };
});
