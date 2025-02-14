const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Vote", (m) => {
    const vote = m.contract("Vote", []);

    return { vote };
});
