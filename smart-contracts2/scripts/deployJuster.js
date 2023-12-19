const hre = require("hardhat");

async function main() {
  //------Deploy & Verify  ZerkLawyer-----//
  const ZerkLawyer = await hre.ethers.deployContract("LawyerContract");

  const ZerkLawyerContract = await ZerkLawyer.waitForDeployment();

  console.log("ZerkLawyer deployed to:", ZerkLawyerContract.target);

  await new Promise((resolve) => setTimeout(resolve, 30000));

  run("verify:verify", {
    address: ZerkLawyerContract.target,
    constructorArguments: [],
  });

  //------Deploy & Verify ZerkJuster------//
  await new Promise((resolve) => setTimeout(resolve, 30000));
  const JusterContract = await hre.ethers.deployContract("JusterContract", [
    ZerkLawyerContract.target,
  ]);

  const ZerkJustContract = await JusterContract.waitForDeployment();

  console.log("ZerkJust deployed to:", ZerkJustContract.target);

  await new Promise((resolve) => setTimeout(resolve, 30000));

  run("verify:verify", {
    address: ZerkJustContract.target,
    constructorArguments: [ZerkJustContract.target],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
