const {test , expect} = require("@playwright/test");
test("open" , async({page}) => {
    await page.goto("https://playwright.dev/");
    await page.getByRole("link" , {name: "GET STARTED"}).click();
    await expect(page).toHaveTitle(/Installation/);
    await page.getByText("You will learn").filter("How to install Playwright").click();
   
    



})