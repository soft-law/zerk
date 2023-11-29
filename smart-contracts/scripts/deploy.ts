import { ethers, run, network } from 'hardhat';
import { BigNumber } from 'ethers';
import { autoToken } from '../typechain-types';
import { getRegistry } from './getRegistry';


async function main() {
  await deployContracts();
}

async function deployContracts(): Promise<void> {

  //Deploy Principal
  console.log(`Deploying CrossChainAutoTokenPrincipal to ${network.name} blockchain...`);
  const contractFactory = await ethers.getContractFactory("CrossChainAutoTokenPrincipal");
  const args = [
    "https://orange-select-earwig-379.mypinata.cloud/ipfs/QmU3MaNFXmPLsAqW8tAmsZvVBbbfHEanNPrAjpRZDwp8qw?_gl=1*2rv03o*_ga*MTM1ODQ0MTgxMi4xNjk2NzkyMjEz*_ga_5RMPXG14TE*MTY5ODEyMjE1NC41LjEuMTY5ODEyMzgxMi43LjAuMA..",
    BigNumber.from(100),
    "0x7cC763017E3190bA9720b5d6b37770f8F21cAd16",
    300
  ] as const;

  const contract: autoToken = await contractFactory.deploy(...args);
  await contract.deployed();
  console.log(`CrossChainAutoTokenPrincipal deployed to ${contract.address}.`);
  console.log("Waiting for propagation of the CrossChainAutoTokenPrincipal contract...");
  // await new Promise((resolve) => setTimeout(resolve, 30000));

  // await run('verify:verify', {
  //   address: contract.address,
  //   constructorArguments: args,
  // });

  //Deploy Escrow
  console.log(`Deploying EscrowAutoToken to ${network.name} blockchain...`);
  const contractFactory2 = await ethers.getContractFactory("EscrowAutoToken");

  const args2 = [
    contract.address,
    10,
    "0x7cC763017E3190bA9720b5d6b37770f8F21cAd16",
    1,
    "0x991d1Cc695Fe3FC90CEf37b5A79FAb087904F5E1",
    "0x991d1Cc695Fe3FC90CEf37b5A79FAb087904F5E1",
    "0x991d1Cc695Fe3FC90CEf37b5A79FAb087904F5E1",
    "0x991d1Cc695Fe3FC90CEf37b5A79FAb087904F5E1",
    1
  ] as const;

  const contract2 = await contractFactory2.deploy(...args2);
  await contract2.deployed();
  console.log(`EscrowAutoToken deployed to ${contract2.address}.`);
  console.log("Waiting for propagation of the contract EscrowAutoToken...");
  // await new Promise((resolve) => setTimeout(resolve, 30000));

  // await run('verify:verify', {
  //   address: contract2.address,
  //   constructorArguments: args2,
  // });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
