const { test, expect } = require("@playwright/test");

test.only("GET request - no auth", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=1");
  console.log("Status:", response.status());
  const body = await response.json();
  console.log(body);

  expect(response.status()).toBe(200);
});
