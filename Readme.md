DApp that consists of:
1. A smart contract in Solidity that saves and reads a message.
Hints:
    * Solidity is the most used language to write smart contracts on Ethereum. We like to see your search and learning capabilities.

2. Use TypeScript to Provide a webpage that reads and writes the message.
Hints:
    * You may use `web3.js`, `ethers.js`, `viem`, `hardhat` or what ever you find convenient.
    * You my use React, Angular, Vue, or without any of them.
    * If you are not familiar with Typescript you can try with JavaScript and then convert the code.
    * It is better to push the code changes that you develop once for every feature or once a day (using git to GitHub or GitLab or similar).

Bonus (additional nice to have):
* It would be nice if you used TypeScript Generics at some part of your code somewhere.
* Host this page on GitHub pages.
* Publish an npm package that does the basic functionality.
* Contains a unit test (using `jest` of a similar test framework for TypeScript).
* Run the unit test in GitHub actions on every code push or MR.


I have made a Simple Express Application that provides the requested functionality.
you can find contract solidity code at ./contracts/MessageContract.sol
tools used :
1- Ganache for emulating ethereum network localy.
2- Truffle to compile solidity code.
3- Express.JS for web application.

How to run the code :
1- install Ganache in your machine.
2- install truffle globaly.
3- run yarn install.
4- run Ganache.
5- replace provider variable at contract controller with your Ethereum provider URL.
6- replace this with your ethereum provider data at truffle-config.js.
    development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 7545,            // Standard Ethereum port (default: none)
        network_id: "5777",       // Any network (default: none)
    },
7- run truffle migrate.
8- run truffle deploy.
9- run yarn start to run the application at port 3000.
