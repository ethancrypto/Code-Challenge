var CustomContract = artifacts.require("./CustomContract.sol");

module.exports = function(deployer) {
    deployer.deploy(CustomContract);
};