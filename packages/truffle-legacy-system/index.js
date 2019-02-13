const Web3 = require("web3");
const LegacyContract = require("./lib/contract");
const deploy = require("./lib/deployer/deploy");
const deployMany = require("./lib/deployer/deploymany");

module.exports = {
  shimWeb3: web3 => {
    if (web3.sha3) {
      web3.utils = {};
      web3.utils.sha3 = web3.sha3;
      return web3;
    } else {
      return web3;
    }
  },
  clone: LegacyContract.clone,
  Web3,
  deploy,
  deployMany
};
