const { expect } = require("chai");
const { ethers } = require("hardhat");
import * as assert from 'assert';


describe("autoTokenSatellite Contract Deploy", function () {
    it("This test should deploy the contract", async function () {
      const Contract = await ethers.getContractFactory("autoTokenSatellite");
      const hardhatToken = await Contract.deploy();
      await hardhatToken.deployed();
      console.log("Contrato autoTokenSatellite desplegado en:", hardhatToken.address);
      expect(hardhatToken.address).to.not.be.undefined;
    });
  });

  describe("autoTokenSatellite sendFunction", function () {
    it("should deploy the contract and send a message", async function () {
        //Despliega principal
        const [owner] = await ethers.getSigners();
        const ContractPrincipal = await ethers.getContractFactory("CrossChainAutoTokenPrincipal");
        const Principal = await ContractPrincipal.deploy("xxx", 10, owner.address, 2);
        await Principal.deployed();
        console.log("Contrato desplegado en:", Principal.address);


      // Despliega el contrato
      const Contract = await ethers.getContractFactory("autoTokenSatellite");
      const hardhatToken = await Contract.deploy();
      await hardhatToken.deployed();
      const contractInstance = Contract.attach(hardhatToken.address);
  
      // Parámetros para enviar el mensaje
      const destinationChain = "Moonbeam";
      const destinationAddress = Principal.address;
      const walletAddress = owner.address;
      const vin = "5555byg";
      const tokenURI = "https://example.com/token/123";
      const gasValue = ethers.utils.parseUnits("1", 6); // 1 MATIC = 1,000,000 mether

      try {
        // Intenta enviar el mensaje
        const tx = await contractInstance.createAutoken(destinationChain, destinationAddress, walletAddress, vin, tokenURI, {
            value: gasValue
          });
        await tx.wait(); // Espera a que se complete la transacción
  
        // Verifica el estado de la transacción
        const receipt = await ethers.provider.getTransactionReceipt(tx.hash);
        expect(receipt.status).to.equal(1); // Espera que la transacción se complete con éxito
      } catch (error) {
        // Maneja cualquier error que ocurra durante la transacción
        console.error("Error en la transacción:", error);
        assert.fail("La transacción falló");
      }
    });
  });
  
  