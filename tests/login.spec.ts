import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testData from '../test-data/users.json';

test.describe('SauceDemo Login Tests', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateLogin();
        await loginPage.login(testData.validUser.username, testData.validUser.password);

        // Verify successful login by checking for the presence of the inventory page
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('should show error message for locked out users', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateLogin();
        await loginPage.login(testData.lockedUser.username, testData.lockedUser.password);
        // Verify error message is displayed
        const errorMessage = page.locator('.error-message-container');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
});