import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

const { Given, When, Then } = createBdd();

When('I click on the add to cart button', async ({ page }) => {
    const productDetailPage = new ProductDetailPage(page);
    await productDetailPage.clickAddToCartButton();
});

When('I click on the remove button', async ({ page }) => {
    const productDetailPage = new ProductDetailPage(page);
    await productDetailPage.clickRemoveFromCartButton();
});

Then('I verify that the Add to Cart button is displayed', async ({ page }) => { 
    const productDetailPage = new ProductDetailPage(page);
    await expect(productDetailPage.addToCartButton).toBeVisible();
    await expect(productDetailPage.removeFromCartButton).toBeHidden();
});

Then('I verify that the Remove button is displayed', async ({ page }) => {
    const productDetailPage = new ProductDetailPage(page);
    await expect(productDetailPage.removeFromCartButton).toBeVisible();
    await expect(productDetailPage.addToCartButton).toBeHidden();
});