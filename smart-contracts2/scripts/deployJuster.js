const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying JusterContract with the account:", deployer.address);

  //-----Deploy & Verify Juster-----//
  const JusterContract = await hre.ethers.deployContract("JusterContract");

  const ZerkJuster = await JusterContract.waitForDeployment();

  console.log("ZerkJuster deployed to:", ZerkJuster.target);

  await new Promise((resolve) => setTimeout(resolve, 30000));

  run("verify:verify", {
    address: ZerkJuster.target,
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
