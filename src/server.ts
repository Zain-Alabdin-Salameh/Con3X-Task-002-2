import express, { Request, Response } from "express";
import { ContractController } from "./controllers/contract_controller";
import { ethers } from "ethers";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (_req: Request, res: Response) => {
  const contract = await new ContractController().connectToContract();
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

app.post("/message", async (req: Request, res: Response) => {
  const newMessage = req.body.newMessage;
  const contract = await new ContractController().connectToContract();
  const transaction = await contract.setMessage(newMessage);
  await transaction.wait();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
