const{test,expect} = require("@playwright/test");
test("flipkart" , async({page}) => {
    await page.goto("https://www.flipkart.com/");
    await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    await page.getByPlaceholder("Search for Products, Brands and More").fill("tv");
    await page.keyboard.press("Enter");
    
    await page.getByAltText("XIAOMI by Mi F Series 108 cm (43 inch) Ultra HD (4K) LED Smart Fire TV 2025 Edition with Dolby Audio |...").click();
    await page.waitForURL("/xiaomi-mi-f-series-108-cm-43-inch-ultra-hd-4k-led-smart-fire-tv-2025-dolby-audio-box-speakers-alexa-32gb-storage-filmmaker-mode/p/itme39b7c9760689?pid=TVSHAVSFGEUJAK9U&lid=LSTTVSHAVSFGEUJAK9UWFABQR&marketplace=FLIPKART&q=tv&store=ckf%2Fczl&srno=s_1_1&otracker=AS_Query_TrendingAutoSuggest_6_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_6_0_na_na_na&fm=search-autosuggest&iid=en_rKeip_WvKN74LMp7AgpFO63wfog-DVfKQeeWj59bWX_BwZM9sU0yuwQXpIGoIwU5Ij0QVHZDubS9VQBSUBnsrfUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=sp&ppn=sp&qH=c9a1fdac6e082dd8");
   
    await page.getByRole("button", {name: "Add to cart"}).click();
   
    await page.getByRole("button", {name: "+"}).click();
    await page.locator('//*[@class="sBxzFz"]').first().click();



    



});