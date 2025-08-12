const{test,expect} = require("@playwright/test");

test("dropdown" , async({page}) => {
    await page.goto("https://www.yatra.com");
    const departfrom = page.locator("#BE_flight_origin_city");
    await departfrom.clear({delay:500});
    await departfrom.pressSequentially("Mum" , {delay:1000});
    await page.locator('.viewport').getByRole('listitem').filter({hasText:"Mumbai(BOM)"}).click();



    

    


})