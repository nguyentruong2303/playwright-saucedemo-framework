import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

const { Given, When, Then } = createBdd();

Given('I click on the inventory item with name {string}', async ({ page }, productName: string) => {
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);
    await productsPage.openProductByName(productName);
    await expect(productDetailPage.productName).toHaveText(productName);
    await expect(productDetailPage.productDescription).not.toBeEmpty();
    await expect(productDetailPage.productPrice).toHaveText(/\$\d+\.\d+/);
    await expect(productDetailPage.productImage).toBeVisible();
    await expect(productDetailPage.backButton).toBeVisible();
});

Then('I verify that there are exactly {int} inventory items displayed on the inventory page', async ({ page }, expectedCount: number) => {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.productItems).toHaveCount(expectedCount);

    const count = await productsPage.productItems.count();
    for (let i = 0; i < count; i++) {
        const item = productsPage.productItems.nth(i);
        await expect(item.locator('.inventory_item_name')).not.toBeEmpty();
        await expect(item.locator('.inventory_item_price')).toHaveText(/^\$\d+\.\d{2}$/);
        await expect(item.locator('.inventory_item_img img')).toBeVisible();
        await expect(item.locator('.inventory_item_desc')).not.toBeEmpty();
    }
});

Then('I should be navigated to the item detail page for {string}', async ({ page }, productName: string) => {
    const productDetailPage = new ProductDetailPage(page);
    await expect(page).toHaveURL(/inventory-item\.html\?id=\d+/);
    await expect(productDetailPage.productName).toHaveText(productName);
});

When('I click on the back button', async ({ page }) => {
    const productDetailPage = new ProductDetailPage(page);
    await productDetailPage.backToProducts();
});

Then('I should be navigated back to the inventory page', async ({ page }) => {
    await expect(page).toHaveURL(/inventory\.html/);
});

