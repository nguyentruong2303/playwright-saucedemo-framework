import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

const { Given, When, Then } = createBdd();

Given('I am on the products page', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.pageTitle).toBeVisible();
});

When('I added a product with name {string} to the cart', async ({ page }, productName: string) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCartByName(productName);
});

Then('I verify the number of items in the cart is {int}', async ({ page }, expectedCount: number) => {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.shopingCartBadge).toHaveText(expectedCount.toString());
});

Then('I verify the number of items in the cart is not visible', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.shopingCartBadge).toBeHidden();
}); 

When('I click on the shopping cart link', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.goToCart();
});