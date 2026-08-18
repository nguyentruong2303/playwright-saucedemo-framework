import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

const { Given, When, Then } = createBdd();

When('I remove all the products from the cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.removeAllProductsFromCart();
});