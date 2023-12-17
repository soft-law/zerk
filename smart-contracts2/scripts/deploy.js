const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying ZerkMinig with the account:", deployer.address);

  // Deploy ZerkToken
  const ZerkToken = await hre.ethers.deployContract("ZerkMinig", [
    deployer.address,
  ]);

  const ZerkContract = await ZerkToken.waitForDeployment();

  console.log("ZerkToken deployed to:", ZerkContract.target);

  await new Promise((resolve) => setTimeout(resolve, 30000));

  run("verify:verify", {
    address: ZerkContract.target,
    constructorArguments: [deployer.address],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
