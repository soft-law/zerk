const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Contract Deploy", function () {
  it("This test should deploy the contract", async function () {
    const Contract = await ethers.getContractFactory("RotamAccess");
    const hardhatToken = await Contract.deploy();

    await hardhatToken.deployed();
    console.log("Contrato desplegado en:", hardhatToken.address);

    expect(hardhatToken.address).to.not.be.undefined;
  });
});