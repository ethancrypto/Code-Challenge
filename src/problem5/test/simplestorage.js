const CustomContract = artifacts.require("./CustomContract.sol");

contract("CustomContract", accounts => {
    it("...should get token balances.", async() => {
        // const simpleStorageInstance = await CustomContract.deployed();

        // // Set value of 89
        // await simpleStorageInstance.set(89, { from: accounts[0] });

        // // Get stored value
        // const storedData = await simpleStorageInstance.get.call();

        // assert.equal(storedData, 89, "The value 89 was not stored.");
    });
});