import { test, expect } from '../fixtures/page-object';

test.describe('SauceDemo Side Bar Menu Tests', () => {
    test('should open and close the side bar menu', async ({ sideBarMenuPage }) => {
        await sideBarMenuPage.openMenu();
        await expect(sideBarMenuPage.allItemsLink).toBeVisible();
        await expect(sideBarMenuPage.aboutLink).toBeVisible();
        await expect(sideBarMenuPage.logoutLink).toBeVisible();
        await expect(sideBarMenuPage.resetAppStateLink).toBeVisible();
        await expect(sideBarMenuPage.closeMenuButton).toBeVisible();

        await sideBarMenuPage.closeMenu();
        await expect(sideBarMenuPage.closeMenuButton).toBeHidden();
    });

    test('should reset app state when clicking Reset App State link', async ({ sideBarMenuPage, productsPage }) => {
        // Add a product to the cart first
        await productsPage.addBackpackToCart();
        await expect(productsPage.shopingCartBadge).toHaveText('1');

        await sideBarMenuPage.openMenu();
        await sideBarMenuPage.clickResetAppState();

        // Verify that the cart is empty after resetting app state
        await expect(productsPage.shopingCartBadge).toBeHidden();
    });

    test('should log out when clicking Logout link', async ({ sideBarMenuPage, page }) => {
        await sideBarMenuPage.openMenu();
        await sideBarMenuPage.clickLogout();
        await expect(page).toHaveURL('/');
    });

    test('should navigate to All Items page when clicking All Items link', async ({ sideBarMenuPage, page }) => {
        await sideBarMenuPage.openMenu();
        await sideBarMenuPage.clickAllItems();
        await expect(page).toHaveURL(/.*inventory/);
    });

    test('should navigate to About page when clicking About link', async ({ sideBarMenuPage, page }) => {
        await sideBarMenuPage.openMenu();
        await sideBarMenuPage.clickAbout();
        await expect(page).toHaveURL(/.*saucelabs.com/);
    });
});