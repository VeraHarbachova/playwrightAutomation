const {test, expect} = require('@playwright/test');

test('Handle inputbox', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Inputbox - firstname
    
    await expect(await page.locator("//input[@name = 'username']")).toBeVisible(); 
    await expect(await page.locator("//input[@name = 'username']")).toBeEmpty();
    await expect(await page.locator("//input[@name = 'username']")).toBeEditable();
    await expect(await page.locator("//input[@name = 'username']")).toBeEnabled();

    //await page.locator("//input[@name = 'username']").fill('Admin');
    await page.fill("//input[@name = 'username']", 'Admin');

    await page.waitForTimeout(5000); //pausing code
})
