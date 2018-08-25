var Heroes = artifacts.require("./Heroes.sol");

module.exports = function(deployer) {
	console.log("Deploying Heroes Cards");
	var heroes;

	deployer.deploy(Heroes);

	// caching instance of contract to heroes and then add data!
  	deployer.then(() => Heroes.deployed())
	  	.then(deployed => heroes = deployed)
	  	.then(() => heroes.createBoss("1 Boss", 1, 1, 3))
	  	.then(() => heroes.createBoss("2 Boss", 2, 2, 4))
	  	.then(() => heroes.createBoss("3 Boss", 3, 3, 5))
	  	.then(() => heroes.createBoss("4 Boss", 3, 3, 5))
	  	.then(() => heroes.createBoss("5 Boss", 3, 3, 5))
	  	.then(() => heroes.createBoss("6 Boss", 3, 3, 5))
	  	.then(() => heroes.createBoss("7 Boss", 3, 3, 5))
};
