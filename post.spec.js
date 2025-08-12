const { test, expect } = require("@playwright/test");

test("GET with query params", async ({ request }) => {
  const response = await request.get("https://www.saucedemo.com/v1/main.js"
    );

  expect(response.status()).toBe(200);
  
  console.log(response.status());
});
