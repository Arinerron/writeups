const { ethers } = require("hardhat");

describe("test", function () {
  it("test", async function () {
    //const [owner] = await ethers.getSigners();
    const Setup = await ethers.getContractFactory("Setup");
    const setup = await Setup.deploy();

    const Exploit = await ethers.getContractFactory("Exploit");
    const exploit = await Exploit.deploy(setup.address);
    await exploit.exploit();
    await exploit.exploit2();
  });
});
