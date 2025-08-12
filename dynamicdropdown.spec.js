const{test,expect} = require("@playwright/test");

test("dynamic" , async({page}) => {
    await page. goto("https://www.yatra.com/%3Fredirect%3Dno");
    const departfrom = page.locator("#BE_flight_origin_city");
    await departfrom.clear({delay:1000});
    await departfrom.pressSequentially("New" , {delay:1000});
    await page.locator(".viewport").getByRole('listitem').filter ({hasText: "New York (JFK)"}).click();




})