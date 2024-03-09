import { ContractController } from "../src/controllers/contract_controller";

test("test contract to get Hello World", async () => {
  const contract = await new ContractController().connectToContract();
  const transaction = await contract.setMessage("Hello World");
  await transaction.wait();
  const message = await contract.getMessage();
  expect(message).toBe("Hello World");
  return;
});
