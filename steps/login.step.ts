import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('I am on the SauceDemo login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateLogin();
});

When('I enter {string} and {string}', async ({ page }, username: string, password: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
});

Then('I should be redirected to the inventory page', async ({ page }) => {
    await expect(page).toHaveURL(/inventory\.html/);
});

Then('I should see an {string}', async ({ page }, message: string) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.errorMessage).toContainText(message);
});