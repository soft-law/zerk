const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying ZerkToken with the account:", deployer.address);

  //-----Deploy & Verify ZerkToken-----//
  const ZerkToken = await hre.ethers.deployContract("ZerkToken", [
    deployer.address,
  ]);

  const ZerkContract = await ZerkToken.waitForDeployment();

  console.log("ZerkToken deployed to:", ZerkContract.target);

  await new Promise((resolve) => setTimeout(resolve, 30000));

  run("verify:verify", {
    address: ZerkContract.target,
    constructorArguments: [deployer.address],
  });

  //------Deploy & Verify  ZerkJusterLawyer-----//
  const ZerkAccess = await hre.ethers.deployContract("ZerkJusterLawyer", []);

  const ZerkAccessContract = await ZerkAccess.waitForDeployment();

  console.log("ZerkAccess deployed to:", ZerkAccessContract.target);

  await new Promise((resolve) => setTimeout(resolve, 30000));

  run("verify:verify", {
    address: ZerkAccessContract.target,
    constructorArguments: [],
  });

  //------Deploy & Verify ZerkJust------//
  const ZerkJust = await hre.ethers.deployContract("ZerkCase", [
    ZerkAccessContract.target,
  ]);

  const ZerkJustContract = await ZerkJust.waitForDeployment();

  console.log("ZerkJust deployed to:", ZerkJustContract.target);

  await new Promise((resolve) => setTimeout(resolve, 30000));

  run("verify:verify", {
    address: ZerkJustContract.target,
    constructorArguments: [ZerkAccessContract.target],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
