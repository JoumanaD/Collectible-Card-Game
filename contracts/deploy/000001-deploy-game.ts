import 'dotenv/config'
import { DeployFunction } from 'hardhat-deploy/types'

const deployer: DeployFunction = async hre => {
  if (hre.network.config.chainId !== 31337) return
  const { deployer } = await hre.getNamedAccounts()
  await hre.deployments.deploy('Main', { from: deployer, log: true })
  //await hre.deployments.deploy('Collection',  { from: deployer, log: true , args: ["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"],})
}

export default deployer
