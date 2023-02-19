require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
    networks: {
        ctf: {
            url: "http://34.141.16.87:30101/74c3be9c-ef8c-41a9-ae24-09fe70acbf34",
            accounts: ["0xc8fc82dd299e57c58039aa7a104635a1b9e665983e3416bf904cb9d4fb20d0b6"]
        }
    }
};
