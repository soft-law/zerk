import { ethers, run, network } from 'hardhat';
import { BigNumber } from 'ethers';
import { autoToken } from '../typechain-types';
import { getRegistry } from './getRegistry';


async function main() {
  await deployContracts();
}

async function deployContracts(): Promise<void> {
  console.log(`Deploying autoTokenSatellite to ${network.name} blockchain...`);

  const contractFactory = await ethers.getContractFactory("autoTokenSatellite");
  
  const contract: autoToken = await contractFactory.deploy();
  await contract.deployed();
  console.log(`autoTokenSatellite deployed to ${contract.address}.`);

  // Only do on testing, or if whitelisted for production
  // const registry = await getRegistry();
  // await registry.addExternalCollection(contract.address, args[0]);
  // console.log('Collection added to Singular Registry');

  // const chainId = (await ethers.provider.getNetwork()).chainId;
  // if (chainId === 31337) {
  //   console.log('Skipping verify on local chain');
  //   return;
  // }

  
  console.log("Waiting for propagation of the satellite contract...");
  await new Promise((resolve) => setTimeout(resolve, 60000));

  await run('verify:verify', {
    address: contract.address,
    constructorArguments: [],
  });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
