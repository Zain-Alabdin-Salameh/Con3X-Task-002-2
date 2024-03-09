import { ethers } from "ethers";

export class ContractController {
  contractAddress: string = "";
  contractABI = [{}];
  constructor() {
    this.contractAddress = "0x472470A9601Ec7f078Be85F0dDE0FF8d1883Df51"; //contract address
    this.contractABI  = [
      {
        constant: false,
        inputs: [
          {
            name: "newMessage",
            type: "string",
          },
        ],
        name: "setMessage",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getMessage",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ]; //ABI of the contract
  }

  async connectToContract(): Promise<ethers.Contract> {
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545"); // Replace with your Ethereum provider URL
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      this.contractAddress,
      this.contractABI,
      signer
    );
    return contract;
  }
}
