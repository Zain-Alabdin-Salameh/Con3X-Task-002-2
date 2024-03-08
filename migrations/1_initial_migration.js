// 2_StoreValue_migration.js

const Migrations = artifacts.require("MessageContract");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};