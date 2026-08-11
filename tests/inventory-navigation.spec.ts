import { test, expect } from '../fixtures/page-object';

test.describe('SauceDemo Product Display & Navigation', () => {

    test('should display exactly 6 products with name, price, image and description', async ({ productsPage }) => {
        await expect(productsPage.productItems).toHaveCount(6);

        const count = await productsPage.productItems.count();
        for (let i = 0; i < count; i++) {
            const item = productsPage.productItems.nth(i);
            await expect(item.locator('.inventory_item_name')).not.toBeEmpty();
            await expect(item.locator('.inventory_item_price')).toHaveText(/^\$\d+\.\d{2}$/);
            await expect(item.locator('.inventory_item_img img')).toBeVisible();
            await expect(item.locator('.inventory_item_desc')).not.toBeEmpty();
        }
    });

    test('should navigate to the correct product detail page when clicking a product name', async ({ page, productsPage }) => {
        await productsPage.openProductByName('Sauce Labs Backpack');

        await expect(page).toHaveURL(/inventory-item\.html\?id=\d+/);
    });

    test('should show correct product info and a working "Back to products" button on the detail page', async ({ page, productsPage, productDetailPage }) => {
        await productsPage.openProductByName('Sauce Labs Backpack');

        await expect(productDetailPage.productName).toHaveText('Sauce Labs Backpack');
        await expect(productDetailPage.productDescription).not.toBeEmpty();
        await expect(productDetailPage.productPrice).toHaveText(/^\$\d+\.\d{2}$/);
        await expect(productDetailPage.productImage).toBeVisible();
        await expect(productDetailPage.backButton).toBeVisible();

        await productDetailPage.backToProducts();

        await expect(page).toHaveURL(/inventory\.html/);
    });

    test('should update the cart icon count after adding a product from the detail page', async ({ productsPage, productDetailPage }) => {
        await productsPage.openProductByName('Sauce Labs Backpack');

        await productDetailPage.addToCartButton.click();

        // Verify that the shopping cart badge shows 1 item
        await expect(productsPage.shopingCartBadge).toHaveText('1');
    });
});
