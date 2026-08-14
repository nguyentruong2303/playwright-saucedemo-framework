import { createBdd } from 'playwright-bdd';
import { SideBarMenuPage } from '../pages/SideBarMenuPage';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I click on the menu button', async ({ page }) => {
    const sideBarMenuPage = new SideBarMenuPage(page);
    await sideBarMenuPage.openMenu();
});

Then('the side bar menu should be open', async ({ page }) => {
    const sideBarMenuPage = new SideBarMenuPage(page);
    await expect(sideBarMenuPage.allItemsLink).toBeVisible();
    await expect(sideBarMenuPage.aboutLink).toBeVisible();
    await expect(sideBarMenuPage.logoutLink).toBeVisible();
    await expect(sideBarMenuPage.resetAppStateLink).toBeVisible();
    await expect(sideBarMenuPage.closeMenuButton).toBeVisible();
});

When('I click on the close button in the side bar menu', async ({ page }) => {
    const sideBarMenuPage = new SideBarMenuPage(page);
    await sideBarMenuPage.closeMenu();
});

Then('the side bar menu should be closed', async ({ page }) => {
    const sideBarMenuPage = new SideBarMenuPage(page);
    await expect(sideBarMenuPage.allItemsLink).toBeHidden();
    await expect(sideBarMenuPage.aboutLink).toBeHidden();
    await expect(sideBarMenuPage.logoutLink).toBeHidden();
    await expect(sideBarMenuPage.resetAppStateLink).toBeHidden();
    await expect(sideBarMenuPage.closeMenuButton).toBeHidden();
});

When('I click on {string} in the side bar menu', async ({page}, menuLink: string ) => {
    const sideBarMenuPage = new SideBarMenuPage(page);
    await sideBarMenuPage.clickMenuLink(menuLink);
});

Then('I should be navigated to the inventory page', async ({ page }) => {
    await expect(page).toHaveURL(/.*inventory/);
});

Then('I should be navigated to the about page', async ({ page }) => {
    await expect(page).toHaveURL(/.*saucelabs.com/);
});

Then('I should be logged out and redirected to the login page', async ({ page }) => {
    await expect(page).toHaveURL('/');
});
