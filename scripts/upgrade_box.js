// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV3 = await ethers.getContractFactory("BoxV3");
  console.log("Upgrading Box...");
  const box = await upgrades.upgradeProxy("0xC0B08C2c5DA0d3277c82df3566307fdE7FD8619e", BoxV3);
  console.log("Box upgraded");
}

main();