const{test,expect} = require("@playwright/test")
test("cookies", async({browser}) =>{

    const context = await browser.newContext();
    await context.addCookies([
        {
           name: "1234",             
      value: "string_sdr",          
      domain: "www.saucedemo.com", 
      path: "/",               
      httpOnly: false,           
      secure: false,
                   
      
        }
    ])

    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/v1/inventory.html");

})
