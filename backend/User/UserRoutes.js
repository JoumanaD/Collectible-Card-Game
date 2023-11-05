const axios = require('axios');


//------------------------------------------
const { ethers, JsonRpcProvider } = require('ethers');

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

// const provider = new JsonRpcProvider('http://localhost:8545');
const wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);


// Load your NFT smart contract (replace with your contract address and ABI)
const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
const contract = require("../../contracts/artifacts/src/Main.sol/Main.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract(contractAddress, contractABI, wallet);

async function getOwners() {
  
  const tx = await nftContract.getOwners();
  //await tx.wait(); // Wait for the transaction to be confirmed
  console.log("--- Users : ",tx);
  return tx;
}

//------------------------------------------ getUsers


const getUsers = async (req, res) => {
    try {
        
        console.log("Get USERS Route");
        const users = await getOwners();
        res.json(users);


    } catch (err) {
        console.error('Erreur lors de la récupération des Users', err); 
        res.send(err)
    }
};


//------------------------------------------ getUserNFTs
// const ownerAddress = "0x875675345E7aaF3228EF68014C86c51121A74962";

async function getNFTsOfOwner(ownerAddress) {

    const balance = await nftContract.balanceOf(ownerAddress); //Returns the number of tokens owned by the address
    let tokenIds = [];
    
    for(let i = 0; i < balance.length; i++) {
        for(let j = 0;j<balance[i];j++){
            const tokenId = await nftContract.tokenOfOwnerByIndex(i, ownerAddress, j); //Get the token ID based on the index from the balanceOf call
            tokenIds.push(tokenId.toString());
        }
    }
    
    console.log(`Token IDs owned by ${ownerAddress}: ${tokenIds}`);
    return tokenIds;
}

const getUserNFTs = async (req, res) => {
    try {
        
        console.log("Get UserNFTs Route");
        const adress = req.params.id;
        console.log("User ID : ",adress);
        
        const userNFTs = getNFTsOfOwner(adress);        
        res.json(userNFTs);

    } catch (err) {
        console.error('Erreur lors de la récupération des UserNFTs', err); 
        res.send(err)
    }
};





module.exports = {
    getUsers,
    getUserNFTs
};
