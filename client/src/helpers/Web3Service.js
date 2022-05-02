import Web3 from 'web3';
import * as CONTRACT_CONFIG from '../config';

const TESTING = true;

const provider = TESTING ? "http://localhost:8545" : Web3.givenProvider;
const web3 = new Web3(provider);

// const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

export function getWeb3(){
    return web3;
};

export async function getAccounts(){
    return await web3.eth.getAccounts();
}

export function getContract(){
    return new web3.eth.Contract(CONTRACT_CONFIG.CONTRACT_ABI, CONTRACT_CONFIG.CONTRACT_ADDRESS);
}

export async function connectAccount(){
    if(!window.ethereum){
        alert("Please intall metamask!");
        return null;
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    
    return accounts[0];
}