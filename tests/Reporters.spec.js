const {test, expect} = require('@playwright/test');

test('Test 1', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    expect(page).toHaveTitle('STORE');
})

test('Test 2', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    expect(page).toHaveTitle('Your Store');
})

test('Test 3', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/');
    expect(page).toHaveTitle('nopCommerce demo store');
})
