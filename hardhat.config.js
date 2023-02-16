require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/7afNEODEaEH64Mzxc-C_ye4K1vBiXV2V",
      accounts: ['15658d88c4a04708deda10f164e3869d3f2e671f64353984eb3e20d0c6db6cb1'],
    },
  },
};