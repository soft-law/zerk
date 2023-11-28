const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Contract Deploy", function () {
  it("This test should deploy the contract", async function () {
    const [owner] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("CrossChainAutoTokenPrincipal");
    const hardhatToken = await Contract.deploy("xxx", 10, owner.address, 2);
    await hardhatToken.deployed();
    console.log("Contrato desplegado en:", hardhatToken.address);
    expect(hardhatToken.address).to.not.be.undefined;
  });
});


describe("create autoToken", function () {
  it("Deployment should create an autoToken", async function () {
    const [owner] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("CrossChainAutoTokenPrincipal");
    const hardhatToken = await Contract.deploy("xxx", 10, owner.address, 2);
    await hardhatToken.deployed();
    const contractInstance = Contract.attach(hardhatToken.address);

    const to = owner.address; // Reemplaza con la dirección del destinatario real
    const numToMint = 1; // Ajusta según tus necesidades
    const tokenURI = "https://example.com/token/123"; // Ajusta según tus necesidades
    const vin = "VIN123"; // Ajusta según tus necesidades

    const tx = await contractInstance.createAutoToken(to, numToMint, tokenURI, vin);
    await tx.wait();

    const receipt = await ethers.provider.getTransactionReceipt(tx.hash);
    expect(receipt.status).to.equal(1);
  });
});



// describe("CrossChainAutoTokenPrincipal _execute function", function () {
//   it("Should execute _execute function and mint tokens", async function () {
//     const [owner] = await ethers.getSigners();
//     const Contract = await ethers.getContractFactory("CrossChainAutoTokenPrincipal");
//     const hardhatToken = await Contract.deploy("xxx", 10, owner.address, 2);
//     await hardhatToken.deployed();
//     const contractInstance = Contract.attach(hardhatToken.address);

//     const sender = owner.address;
//     const sourceChain = "Polygon";
//     const sourceAddress = "0x123abc";
//     const tokenURI = "https://example.com/token/123";

//     const payload = ethers.utils.defaultAbiCoder.encode(
//       ["string", "address"],
//       [tokenURI, sender]
//     );

//     const tx =  await contractInstance.executeT(sourceChain, sourceAddress, payload);
//     await tx.wait();

//     const tokenCount = await contractInstance.balanceOf(sender);
//     expect(tokenCount).to.equal(1);

//   });
// });


