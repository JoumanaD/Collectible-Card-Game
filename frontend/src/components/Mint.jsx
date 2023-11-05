import { useState } from "react";
import Web3 from "web3";
import Sets from "./Sets";
import "../css/Mint.css"
import PokemonCard from "./PokemonCard";

function Mint() {
    const [showSets, setShowSets] = useState(true);
    const [setId, setSetId] = useState();
    const [selectedCards, setCards] = useState([]);

    const mintCards = () => {
        async function getAccount() {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            return accounts
        }
        async function loadWeb3() {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
            }
        }

        async function loadContract() {
            let abi = [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnableInvalidOwner",
                    "type": "error"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "name": "OwnableUnauthorizedAccount",
                    "type": "error"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256[]",
                            "name": "",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "int256",
                            "name": "cardCount",
                            "type": "int256"
                        }
                    ],
                    "name": "createCollection",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "getOwners",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "",
                            "type": "address[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "collectionId",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "tokenURI",
                            "type": "string"
                        }
                    ],
                    "name": "mintCard",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "owners",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "renounceOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "int256",
                            "name": "collectionId",
                            "type": "int256"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "i",
                            "type": "uint256"
                        }
                    ],
                    "name": "tokenOfOwnerByIndex",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "int256",
                            "name": "collectionId",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "i",
                            "type": "uint256"
                        }
                    ],
                    "name": "tokenURI",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ] // your abi here
            let address = "0x5fbdb2315678afecb367f032d93f642f64180aa3"  // your contract address here
            return await new window.web3.eth.Contract(abi, address);
        }

        const mint = async () => {
            let accounts = await getAccount()
            await loadWeb3();
            window.contract = await loadContract();
            console.log(setId, "0x875675345E7aaF3228EF68014C86c51121A74962", selectedCards)
            console.log(accounts);
            for (let card of selectedCards) {
                let result = window.contract.methods.mintCard(setId, "0x875675345E7aaF3228EF68014C86c51121A74962", card).send({ from: accounts[0] });
            }
            /* window.ethereum
            .request({
            method: 'eth_sendTransaction',
            // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
            params: [
                {
                from: accounts[0], // The user's active address.
                to: "0x5fbdb2315678afecb367f032d93f642f64180aa3", // Required except during contract publications.
                value: "0" ,// Only required to send ether to the recipient from the initiating external account.
                gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.
                maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.
                maxFeePerGas: '0x2540be400', // Customizable by the user during MetaMask confirmation.
                data: ""
                },
            ],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error(error)); */
        };
        mint();
        // Send Ethereum to an address

    }


    return (

        <div className="pokemon-sets-div">
            <input type="text" className="mint-input" />
            {!showSets && <button onClick={() => { setShowSets(!showSets); setCards([]) }}>Back to sets</button>}
            {!showSets && <button onClick={() => mintCards()}
                disabled={selectedCards.length === 0}  >Mint !</button>}
            {showSets && <Sets setSetId={setSetId} setShowSets={setShowSets} preventNavigation={true}></Sets>}
            {!showSets && <PokemonCard setId={setId} minting={true} setCardsToMint={setCards}></PokemonCard>}
        </div>
    );
}

export default Mint;

