import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testData from '../test-data/users.json';

test.describe('SauceDemo Login Feature - Negative Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateLogin();
    });

    test('Verify error message for invalid username', async () => {
        await loginPage.login(testData.lockedUser.username, testData.lockedUser.password);
        expect(await loginPage.getErrorMessage()).toContain('Epic sadface: Sorry, this user has been locked out.');
    });

    test('Verify error message for invalid password', async () => {
        await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
        expect(await loginPage.getErrorMessage()).toContain('Epic sadface: Username and password do not match any user in this service');
    });
});
