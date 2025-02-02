const { getUser } = require("../src/client");

test("Fetch existing user", async () => {
  const user = await getUser("123");
  expect(user).toEqual({ id: "123", name: expect.any(String) });
});

test("Handle user not found", async () => {
  const user = await getUser("999");
  expect(user).toEqual({ error: "User not found" });
});