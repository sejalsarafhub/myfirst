const { test, expect } = require("@playwright/test");

test.only("PUT RESPONSE", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/1", {
    data: {
      name: "Sejal"
    }
  });

  expect(response.status()).toBe(401);
  console.log(await response.json());
});

test.only("Check actual URL reached", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/1");
  console.log("Status:", response.status());
  console.log(await response.text());
});


