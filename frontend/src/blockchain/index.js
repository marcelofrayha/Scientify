import Web3 from "web3";
import contractABI from "./abi.json" assert { type: "json" };

const web3 = new Web3(
  `https://arbitrum-sepolia.infura.io/v3/${import.meta.env.VITE_API_KEY}`,
);

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

const contract = new web3.eth.Contract(contractABI, contractAddress);

contract.methods
  .researchById("1")
  .call()
  .then((value) => {
    console.log("----- value:", value);
  })
  .catch((error) => console.error(error));
