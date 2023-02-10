const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

  const MyTokenContract = await ethers.getContractFactory(
    "MyToken"
  );

  // deploy the contract
  const deployedMyTokenContract = await MyTokenContract.deploy();

  await deployedMyTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "MyToken Contract Address:",
    deployedMyTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });