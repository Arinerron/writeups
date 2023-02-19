require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
    networks: {
        ctf: {
            url: "http://34.141.16.87:30201/9bd0b575-cc81-44f1-92f4-e1bf58b85634",
            accounts: ["0x335c7eccfab81bb36c335aa5964137e49043818545332184814ab99f4baab4b7"]
        }
    }
};

