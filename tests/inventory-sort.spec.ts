import { test, expect } from '../fixtures/page-object';


test.describe('SauceDemo Products Sort Dropdown', () => {

    test('Verify user can sort products by name A to Z', async ({ productsPage }) => {

        await productsPage.sortProductsBy('za'); // get the product names in a different order first to ensure the sort is actually changing the order
        const namesBeforeAsc = await productsPage.getProductNames();

        await productsPage.sortProductsBy('az');
        const actualProductNames = await productsPage.getProductNames();

        expect(actualProductNames).not.toEqual(namesBeforeAsc); 
        expect(actualProductNames).toEqual([...actualProductNames].sort((a, b) => a.localeCompare(b)));
    });


    test('Verify user can sort products by name Z to A', async ({ productsPage }) => {

        await productsPage.sortProductsBy('az'); 
        const namesBeforeDesc = await productsPage.getProductNames();

        await productsPage.sortProductsBy('za');
        // get the actual product names displayed on the UI after sorting
        const actualProductNames = await productsPage.getProductNames();

        expect(actualProductNames).not.toEqual(namesBeforeDesc); 
        // create a sorted copy of the actual product names to compare with the UI order
        expect(actualProductNames).toEqual([...actualProductNames].sort((a, b) => b.localeCompare(a)));
    });

    test('Verify user can sort products by price low to high', async ({ productsPage }) => {
        await productsPage.sortProductsBy('hilo'); 
        const pricesBeforeAsc = await productsPage.getProductPrices();

        await productsPage.sortProductsBy('lohi');
        // get the actual prices displayed on the UI after sorting
        const actualPrices = await productsPage.getProductPrices();

        expect(actualPrices).not.toEqual(pricesBeforeAsc); 
        expect(actualPrices).toEqual([...actualPrices].sort((a, b) => a - b));
    });

    test('Verify user can sort products by price high to low', async ({ productsPage }) => {
        await productsPage.sortProductsBy('lohi');
        const pricesBeforeDesc = await productsPage.getProductPrices();

        await productsPage.sortProductsBy('hilo');
        const actualPrices = await productsPage.getProductPrices();

        expect(actualPrices).not.toEqual(pricesBeforeDesc);
        expect(actualPrices).toEqual([...actualPrices].sort((a, b) => b - a));
    });
});