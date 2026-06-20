import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import testData from '../test-data/users.json';

test.describe('SauceDemo Products Feature', () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        await loginPage.navigateLogin();
        await loginPage.login(testData.validUser.username, testData.validUser.password);
    });

    test('Verify user can add product to cart', async ({ page }) => {
        await productsPage.addBackpackToCart();

        // Verify that the shopping cart badge shows 1 item
        await expect(productsPage.shopingCartBadge).toHaveText('1');
    });

    test('Verify page title is correct', async ({ page }) => {
        // Verify that the page title is "Products"
        await expect(productsPage.pageTitle).toHaveText('Products');
    });

    test('Verify user can sort products by price low to high', async () => {
        await productsPage.sortProductsBy('lohi');

        // get the actual prices displayed on the UI after sorting
        const actualPrices = await productsPage.getProductPrices();

        // create a sorted copy of the actual prices to compare with the UI order
        // use the spread operator to create a shallow copy of the array and then sort it
        const expectedPricesSorted = [...actualPrices].sort((a, b) => a - b);

        // verify that the actual prices order on the UI matches the expected sorted order
        expect(actualPrices).toEqual(expectedPricesSorted);
    });

    test('Verify user can sort products by price high to low', async () => {
        await productsPage.sortProductsBy('hilo');

        // get the actual prices displayed on the UI after sorting
        const actualPrices = await productsPage.getProductPrices(); // Ví dụ: [29.99, 15.99, 9.99]
        const expectedPricesSorted = [...actualPrices].sort((a, b) => b - a);

        // verify that the actual prices order on the UI matches the expected sorted order
        expect(actualPrices).toEqual(expectedPricesSorted);
    });
});