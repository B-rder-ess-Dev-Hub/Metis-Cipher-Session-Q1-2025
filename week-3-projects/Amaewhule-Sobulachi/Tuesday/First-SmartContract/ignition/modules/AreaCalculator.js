const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AreaCalculatorModule", (m) => {
  const areaCalculatorContract = m.contract("AreaCalculator", []);

  return { areaCalculatorContract };
});
