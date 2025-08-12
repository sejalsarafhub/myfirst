const{test,expect} = require("@playwright/test")
test("cookies", async({browser}) =>{

    const context = await browser.newContext();
    await context.addCookies([
        {
           name: "1234",              // Cookie name
      value: "string_sdr",           // Cookie value
      domain: "www.saucedemo.com", // Must match the site domain
      path: "/",                 // Path
      httpOnly: false,           // Optional
      secure: false,
                    // Optional
      
        }
    ])

    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/v1/inventory.html");

})