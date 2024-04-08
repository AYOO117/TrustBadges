import { Web3 } from "web3";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url'

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// Set up a connection to the Ethereum network
web3.eth.Contract.handleRevert = true;

// Read the bytecode from the file system
const currentFileUrl = import.meta.url;
const currentDirPath = path.dirname(new URL(currentFileUrl).pathname);
const getDirName = function (moduleUrl) {
    const filename = fileURLToPath(moduleUrl)
    return path.dirname(filename)
}
const dirName = getDirName(import.meta.url)
const bytecodePath = path.join(dirName, 'TrustBadgeBytecode.bin');
const bytecode = fs.readFileSync(bytecodePath, 'utf8');

// Create a new contract object using the ABI and bytecode
import abi from './trustBadgeABI.json' assert { type: 'json' };
const MyContract = new web3.eth.Contract(abi);

async function deploy() {
    const providersAccounts = await web3.eth.getAccounts();
    const defaultAccount = providersAccounts[0];
    console.log('deployer account:', defaultAccount);

    const myContract = MyContract.deploy({
        data: '0x' + bytecode,
        arguments: [],
    });

    // optionally, estimate the gas that will be used for development and log it
    const gas = await myContract.estimateGas({
        from: defaultAccount,
    });
    console.log('estimated gas:', gas);

    try {
        // Deploy the contract to the Ganache network
        const tx = await myContract.send({
            from: defaultAccount,
            gas,
            gasPrice: 10000000000,
        });
        console.log('Contract deployed at address: ' + tx.options.address);

        // Write the Contract address to a new file
        const deployedAddressPath = path.join(__dirname, 'trustBadgeABI.bin');
        fs.writeFileSync(deployedAddressPath, tx.options.address);
    } catch (error) {
        console.error(error);
    }
}

deploy();