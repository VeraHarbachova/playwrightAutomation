const { test, expect } = require("@playwright/test");

test('Handle Dropdowns', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select multiple options from multi select dropdowns

    //await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

    //Assertions
    //1 check numbers of options in dropdown
    //const options = await page.locator('#colors option');
    //await expect(options).toHaveCount(5);

    //2 check numbers of options in dropdown using JS Array

    //const options = await page.$$('#colors option');
    //console.log("Number of options:", options.length);
    //await expect(options.length).toBe(5);

    //3 check presence of value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();

    await page.waitForTimeout(5000);
})


