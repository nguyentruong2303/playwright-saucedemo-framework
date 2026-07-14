import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testData from '../test-data/users.json';

test.describe('SauceDemo Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateLogin();
    });

    test.describe('SauceDemo Login Feature - Positive Tests', () => {
        test('should login successfully with valid credentials', async ({ page }) => {
            await loginPage.login(testData.validUser.username, testData.validUser.password);

            // Verify successful login by checking for the presence of the inventory page
            await expect(page).toHaveURL(/inventory\.html/);
        });
    });

    test.describe('SauceDemo Login Feature - Negative Tests', () => {
        test('should display error message for invalid credentials', async ({ page }) => {
            await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);

            // Verify error message is displayed
            await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
        });
    });
    test.describe('SauceDemo Login Feature - Edge Case Tests', () => {
        test('should display error message for empty username and password', async ({ page }) => {
            await loginPage.login('', '');

            // Verify error message is displayed
            await expect(loginPage.errorMessage).toContainText('Epic sadface: Username is required');
        });

        test('should display error message for empty password', async ({ page }) => {
            await loginPage.login(testData.validUser.username, '');

            // Verify error message is displayed
            await expect(loginPage.errorMessage).toContainText('Epic sadface: Password is required');
        });
    });
    test.describe('SauceDemo Login Feature - Login with locked out user', () => {
        test('should display error message for locked out user', async ({ page }) => {
            await loginPage.login(testData.lockedUser.username, testData.lockedUser.password);

            // Verify error message is displayed
            await expect(loginPage.errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
        });
    });
});