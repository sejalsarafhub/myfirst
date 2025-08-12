import { test } from "@playwright/test";
import { getlogin } from "../api-calls/getlogin.js";

test.only("My Account using cookie injection", async ({ browser }) => {
  // Get the cookie data from your login API
  const login = await getlogin();
  console.log({ login })


  // Create a new browser context and set the cookie
  const context = await browser.newContext();
  await context.addCookies({
    "name: sejal"          // 'Lax', 'Strict', or 'None'
  

  
  }
})
