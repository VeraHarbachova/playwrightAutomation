const {test, expect} = require('@playwright/test');

test('Handle checkboxes', async ({ page }) => {
    
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    //singe checkbox

    await page.locator("//input[@id = 'monday' and @type = 'checkbox']").check();
    //await page.check("//input[@id = 'monday' and @type = 'checkbox']");

    expect(await page.locator("//input[@id = 'monday' and @type = 'checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id = 'monday' and @type = 'checkbox']").isChecked).toBeTruthy();
    expect(await page.locator("//input[@id = 'sunday' and @type = 'checkbox']").isChecked).toBeFalsy();

    //Multiple checkboxes

    const checkboxesLocators = [
        "//input[@id = 'sunday' and @type = 'checkbox']",
        "//input[@id = 'sunday' and @type = 'checkbox']",
        "//input[@id = 'saturday' and @type = 'checkbox']"
    ];

    for(const locator of checkboxesLocators) { //select multiple checkboxes
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000); //pausing code 

    for(const locator of checkboxesLocators) { //unselect multiple checkboxes which are already selected
        
        if(await page.locator(locator).isChecked()) {

        await page.locator(locator).uncheck();
        }
    }
    await page.waitForTimeout(5000); //pausing code 
})
