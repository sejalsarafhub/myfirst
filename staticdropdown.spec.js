const {test,expect} = require("@playwright/test");

test("dropdown" , async({page}) => {
    await page.goto("https://www.salesforce.com/in/form/signup/sales-ee/?d=topnav2-btn-ft");
    await expect(page).toHaveTitle("Free Trial: Salesforce 30-Days Trial - Salesforce IN");
    await page.getByRole('textbox' , {name: "First name"}).fill("Sejal");
    await page.getByRole('textbox' , {name: "Last name"}).fill("Saraf");
    await page.getByRole('textbox' , {name: "Job title"}).fill("Automation Engineer");
    await page.getByRole('button', {name: "NEXT"}).click();
    await page.locator("//*[@name='CompanyEmployees']").selectOption({label: "10,001+ employees"});
    await page.waitForTimeout(1000);
    await page.getByRole('textbox' , {name:"Company"}).fill("Accenture");
    await page.locator("//*[@name='CompanyCountry']").selectOption({index:2});
    await expect(Nextbutton).toHaveText("Next");
    await page.getByRole('button', {name: "NEXT"}).click();






})