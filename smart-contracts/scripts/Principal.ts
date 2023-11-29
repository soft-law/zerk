import { ethers, run, network } from 'hardhat';
import { BigNumber } from 'ethers';
import { autoToken } from '../typechain-types';
import { getRegistry } from './getRegistry';


async function main() {
  await deployContracts();
}

async function deployContracts(): Promise<void> {
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

  // Only do on testing, or if whitelisted for production
  // const registry = await getRegistry();
  // await registry.addExternalCollection(contract.address, args[0]);
  // console.log('Collection added to Singular Registry');

  // const chainId = (await ethers.provider.getNetwork()).chainId;
  // if (chainId === 31337) {
  //   console.log('Skipping verify on local chain');
  //   return;
  // }

  
  console.log("Waiting for propagation of the contract...");
  await new Promise((resolve) => setTimeout(resolve, 30000));

  await run('verify:verify', {
    address: contract.address,
    constructorArguments: args,
  });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
