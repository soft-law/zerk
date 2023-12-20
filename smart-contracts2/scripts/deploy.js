const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying LawyerContract with the account:", deployer.address);

  //-----Deploy & Verify Lawyer-----//
  const LawyerContract = await hre.ethers.deployContract(
    "LawyerJusterContract"
  );

  const ZerkLawyer = await LawyerContract.waitForDeployment();

  console.log("ZerkLawyer deployed to:", ZerkLawyer.target);

  await new Promise((resolve) => setTimeout(resolve, 30000));

  run("verify:verify", {
    address: ZerkLawyer.target,
    constructorArguments: [],
  });

  //------Deploy & Verify ZerkCase------//
  const ZerkJust = await hre.ethers.deployContract("ZerkCase", [
    ZerkLawyer.target,
  ]);

  const ZerkJustContract = await ZerkJust.waitForDeployment();

  console.log("ZerkJust deployed to:", ZerkJustContract.target);

  await new Promise((resolve) => setTimeout(resolve, 30000));

  run("verify:verify", {
    address: ZerkJustContract.target,
    constructorArguments: [ZerkLawyer.target],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
