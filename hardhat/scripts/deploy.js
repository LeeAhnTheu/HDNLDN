const hre = require("hardhat");

async function main() {
  const Cosmetics = await hre.ethers.getContractFactory("Cosmetics");
  
  const cosmetics = await Cosmetics.deploy();
  await cosmetics.deployed();

  console.log("Cosmetics deployed!!!\n\tContract adddress: ", cosmetics.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
