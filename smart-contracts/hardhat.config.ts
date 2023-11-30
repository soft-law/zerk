import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-contract-sizer';

dotenv.config();

const SOLC_SETTINGS = {
  // evmVersion: "london",
  optimizer: {
    enabled: true,
    runs: 1_000,
  },
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.21',
        settings: SOLC_SETTINGS
      },
      {
        version: '0.8.19',
        settings: SOLC_SETTINGS
      },
      {
        version: '0.8.17',
        settings: SOLC_SETTINGS
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 1337,
      gas: "auto",
    },
    moonbaseAlpha: {
      url: process.env.MOONBASE_URL || 'https://rpc.testnet.moonbeam.network',
      chainId: 1287,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 1100000000,
    },
    sepolia: {
      url: process.env.SEPOLIA_URL || 'https://rpc.sepolia.dev',
      chainId: 11155111,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygonMumbai: {
      url: process.env.MUMBAI_URL || 'https://rpc-mumbai.maticvigil.com',
      chainId: 80001,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 2500000000,
    },
    baseGoerli: {
      chainId: 84531,
      url: process.env.BASE_GOERLI_URL || 'https://goerli.base.org',
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 2000000000,
    },
    shibuya: {
      chainId: 81,
      url: process.env.SHIBUYA_URL || 'https://evm.shibuya.astar.network',
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    moonriver: {
      url: process.env.MOONRIVER_URL || 'https://rpc.api.moonriver.moonbeam.network',
      chainId: 1285,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    moonbeam: {
      url: process.env.MOONBEAM_URL || 'https://moonbeam-rpc.dwellir.com',
      chainId: 1284,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mainnet: {
      url: process.env.ETHEREUM_URL || 'https://eth.drpc.org',
      chainId: 1,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 12000000000,
    },
    polygon: {
      url: process.env.POLYGON_URL || 'https://polygon.drpc.org',
      chainId: 137,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 120000000000,
    },
    base: {
      chainId: 8453,
      url: process.env.BASE_URL || 'https://developer-access-mainnet.base.org',
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    astar: {
      url: process.env.ASTAR_URL || 'https://evm.astar.network',
      chainId: 592,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    rotam: {
      url: process.env.ROTAM_URL || 'https://evm.astar.network',
      chainId: 98765,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  }, etherscan: {
    apiKey: {
      moonbaseAlpha: process.env.MOONSCAN_APIKEY || '', // Moonbeam Moonscan API Key
      sepolia: process.env.ETHERSCAN_API_KEY || '', // Sepolia Etherscan API Key
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || '', // Polygon Mumbai Etherscan API Key
      baseGoerli: process.env.BASESCAN_API_KEY || '', // Base Goerli Etherscan API Key
      shibuya: process.env.SHIBUYA_BLOCKSCOUT_API_KEY || '', // Shibuya blockscout API KeyT
      moonriver: process.env.MOONSCAN_APIKEY || '', // Moonriver Moonscan API Key
      moonbeam: process.env.MOONSCAN_APIKEY || '', // Moonbeam Moonscan API Key
      mainnet: process.env.ETHERSCAN_API_KEY || '', // Ethereum Etherscan API Key
      polygon: process.env.POLYGONSCAN_API_KEY || '', // Polygon Etherscan API Key
      base: process.env.BASESCAN_API_KEY || '', // Base Etherscan API Key
      astar: process.env.ASTAR_BLOCKSCOUT_API_KEY || '', // Astar blockscout API KeyT
    },
  }
};

export default config;
