const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

    const DynamicTokenContract = await ethers.getContractFactory(
        "WomenCodeDynamicNFT"
    );

    // deploy the contract
    const deployedDynamicTokenContract = await DynamicTokenContract.deploy();

    await deployedDynamicTokenContract.deployed();
    // print the address of the deployed contract
    console.log(
        "MyToken Contract Address:",
        deployedDynamicTokenContract.address
    );
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });