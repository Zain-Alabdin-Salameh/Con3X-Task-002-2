import {connectToContract} from "../src/server";

test('test contract to get Hello World', async() => {
    const contract = await connectToContract();
    const transaction = await contract.setMessage("Hello World");
    await transaction.wait();
    const message = await contract.getMessage();
    expect(message).toBe("Hello World");
    return;
  });


