import express, { Request, Response } from 'express';
import { ethers } from 'ethers';

const app = express();
const port = 3000;
const contractAddress = '0x472470A9601Ec7f078Be85F0dDE0FF8d1883Df51'; //contract address
const contractABI = [{
    "constant": false,
    "inputs": [
      {
        "name": "newMessage",
        "type": "string"
      }
    ],
    "name": "setMessage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }]; //ABI of the contract

export async function connectToContract() {
    const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545'); // Replace with your Ethereum provider URL
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
}

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (_req: Request, res: Response) => {
    const contract = await connectToContract();
    const message = await contract.getMessage();
    res.send(`
        <html>
        <head>
            <title>Con3X-Task-002-2</title>
        </head>
        <body>
            <h1>Current Message: ${message}</h1>
            <form action="/message" method="POST">
                <label for="newMessage">New Message: </label>
                <input type="text" id="newMessage" name="newMessage" required />
                <button type="submit">Set Message</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/message', async (req: Request, res: Response) => {
    const newMessage = req.body.newMessage;
    const contract = await connectToContract();
    const transaction = await contract.setMessage(newMessage);
    await transaction.wait();
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});