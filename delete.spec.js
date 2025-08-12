const { test, expect } = require("@playwright/test");

test.only("DELETE request - no auth", async ({ request }) => {
  const response = await request.get("https://postman-echo.com/status/204");
  console.log("Status:", response.status());
  


  expect(response.status()).toBe(204);
});
