require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/VbHEXU4VyYVGqsXBCE_K9FDoHvmyCSsw",
       accounts: ["6478536cafe76401a21073f8e95b2cd55712337ebe9e0d2bff950f54780bbd41"]
    }
  }

};