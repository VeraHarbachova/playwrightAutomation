import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('test', async ({ page }) => {
    
  //Login using POM
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login('pavanol', 'test@123');
  await page.waitForTimeout(3000);

  //Home

  const home = new HomePage(page);
  await home.addProductToCart('Nexus 6');
  await home.goToCart();
  await page.waitForTimeout(3000);

  //Cart

  const cart = new CartPage(page);
  page.waitForTimeout(5000);
  const status = await cart.checkProductInCart('Nexus 6');
  await expect(await status).toBe(true);
})