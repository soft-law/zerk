const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};
const ether = tokens;

describe("Autotoken", () => {
  let autoToken, escrow, accounts;
  let deployer, seller, buyer;
  let nftID = 1;
  let purchasePrice = ether(100);
  let escrowAmout = ether(5);

  beforeEach(async () => {
    const [owner] = await ethers.getSigners();
    //setup accounts
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    seller = deployer;
    buyer = accounts[1];

    //Load Contracts
    const AutoToken = await ethers.getContractFactory(
      "CrossChainAutoTokenPrincipal"
    );
    const Escrow = await ethers.getContractFactory("EscrowAutoToken");

    //Deploy Contracts
    autoToken = await AutoToken.deploy(
      "https://orange-select-earwig-379.mypinata.cloud/ipfs/QmU3MaNFXmPLsAqW8tAmsZvVBbbfHEanNPrAjpRZDwp8qw?_gl=1*2rv03o*_ga*MTM1ODQ0MTgxMi4xNjk2NzkyMjEz*_ga_5RMPXG14TE*MTY5ODEyMjE1NC41LjEuMTY5ODEyMzgxMi43LjAuMA..",

      BigNumber.from(100),
      owner.address,
      300
    );

    escrow = await Escrow.deploy(
      autoToken.address,
      escrowAmout,
      owner.address,
      ether(1),
      buyer.address
    );

    await autoToken.deployed();
    await escrow.deployed();
  });

  describe("NFT deployment", async () => {
    it("sends an nft to the deployer", async () => {
      const [owner] = await ethers.getSigners();
      const to = owner.address;
      const numToMint = 1;
      const tokenURI = "https://example.com/token/123";
      const vin = "VIN123";

      const tx = await autoToken.createAutoToken(to, numToMint, tokenURI, vin);
      await tx.wait();
      expect(await autoToken.ownerOf(nftID)).to.equal(seller.address);
    });
  });

  describe("Selling AutoToken", async () => {
    it("executes a successfull sale of autoToken", async () => {
      //mints nft to deployer
      const [owner] = await ethers.getSigners();
      const to = owner.address;
      const numToMint = 1;
      const tokenURI = "https://example.com/token/123";
      const vin = "VIN123";
      const mechanic = owner.address;
      const aesthetic = owner.address;
      const lawyer = owner.address;
      let balance;
      const tx = await autoToken.createAutoToken(to, numToMint, tokenURI, vin);
      await tx.wait();
      //Expects seller to be NFT  owner before the sale
      expect(await autoToken.ownerOf(nftID)).to.equal(seller.address);

      //Seller Approves NFT
      const trax = await autoToken
        .connect(seller)
        .approve(escrow.address, nftID);
      await trax.wait();

      //Check escrow balance
      balance = await escrow.getBalance();
      console.log(
        "escrow balance: ",
        ethers.utils.formatEther(balance),
        "ether"
      );

      //Buyers deposits earnest
      try {
        const tran = await escrow
          .connect(buyer)
          .depositEarnest({ value: purchasePrice });
        await tran.wait();
      } catch (e) {
        console.log(e);
      }
      //Check escrow balance
      balance = await escrow.getBalance();
      console.log(
        "escrow balance: ",
        ethers.utils.formatEther(balance),
        "ether"
      );

      //Finalize sale
      const txx = await escrow
        .connect(buyer)
        .finalizeSale(
          seller.address,
          buyer.address,
          1,
          purchasePrice,
          mechanic,
          lawyer,
          aesthetic
        );
      await txx.wait();
      console.log("Buyer finalizes sale");

      //Expects buyer to be nft owner after sale
      expect(await autoToken.ownerOf(nftID)).to.equal(buyer.address);
    });
  });
});
