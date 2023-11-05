const { ethers, JsonRpcProvider, NonceManager } = require('ethers');
const axios = require('axios');

// Connect to Ethereum network
const provider = new JsonRpcProvider('http://localhost:8545');
const wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);

// Load your NFT smart contract (replace with your contract address and ABI)
const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
const contract = require("../artifacts/src/Main.sol/Main.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract(contractAddress, contractABI, new NonceManager(wallet));


function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}



// Mint a new NFT
const createCollection = async ()=> {

  var date1 = new Date();

  const response = await axios.get('https://api.pokemontcg.io/v2/sets');
  const data = response.data;   
  for(let i=0; i< 20; i++){
    //i< data.data.length
    const set = data.data[i];
    console.log(set.id, set.name, set.total);
    const tx = await nftContract.createCollection(set.id,set.name, set.total);
    //await tx.wait(); // Wait for the transaction to be confirmed
    console.log(tx);
    console.log(i)

  }
  var date2 = new Date();
  var diff = date2 - date1; //milliseconds interval
  console.log("Duration : ",millisToMinutesAndSeconds(diff));
  
}

module.exports = {
  createCollection
};
