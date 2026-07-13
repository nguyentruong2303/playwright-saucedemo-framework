import { test, expect } from '../fixtures/page-object';


test.describe('SauceDemo Products Feature', () => {

    test('Verify user can add product to cart', async ({ productsPage }) => {
        await productsPage.addBackpackToCart();

        // Verify that the shopping cart badge shows 1 item
        await expect(productsPage.shopingCartBadge).toHaveText('1');
    });

    test('Verify page title is correct', async ({ productsPage }) => {
        // Verify that the page title is "Products"
        await expect(productsPage.pageTitle).toHaveText('Products');
    });

    test('Verify user can sort products by price low to high', async ({ productsPage }) => {
        await productsPage.sortProductsBy('lohi');

        // get the actual prices displayed on the UI after sorting
        const actualPrices = await productsPage.getProductPrices();

        // create a sorted copy of the actual prices to compare with the UI order
        // use the spread operator to create a shallow copy of the array and then sort it
        const expectedPricesSorted = [...actualPrices].sort((a, b) => a - b);

        // verify that the actual prices order on the UI matches the expected sorted order
        expect(actualPrices).toEqual(expectedPricesSorted);
    });

    test('Verify user can sort products by price high to low', async ({ productsPage }) => {
        await productsPage.sortProductsBy('hilo');

        // get the actual prices displayed on the UI after sorting
        const actualPrices = await productsPage.getProductPrices(); // Ví dụ: [29.99, 15.99, 9.99]
        const expectedPricesSorted = [...actualPrices].sort((a, b) => b - a);

        // verify that the actual prices order on the UI matches the expected sorted order
        expect(actualPrices).toEqual(expectedPricesSorted);
    });
});