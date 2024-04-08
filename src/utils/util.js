import Web3 from "web3";
import fs from "fs";
import path from "path";

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:5173/'));
web3.eth.Contract.handleRevert = true;

const deployedAddressPath = path.join(__dirname, 'OpinioNectAddress.bin');
const deployedAddress = fs.readFileSync(deployedAddressPath, 'utf8');

const abi = require('./trustBadgeABI.json');
const OpinioNect = new web3.eth.Contract(abi, deployedAddress);

async function interact() {
    const providersAccounts = await web3.eth.getAccounts();
    const defaultAccount = providersAccounts[0];

    try {
        console.log("functions")
    } catch (err) {
        console.error(err)
    }
}

