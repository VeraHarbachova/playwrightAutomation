const {test, expect} = require('@playwright/test');

test('Handle radio button', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    //Radio button

    await page.locator("//input[@id='gender-female']").check(); //Female
    //await page.check("//input[@id='gender-female']")

    await expect(await page.locator("//input[@id='gender-female']")).toBeChecked();
    await expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeTruthy(); //Female

    await expect(await page.locator("//input[@id='gender-male']").isChecked()).toBeFalsy();  //Male

    await page.waitForTimeout(5000); //pausing code
})
