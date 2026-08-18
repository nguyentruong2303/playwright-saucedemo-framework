import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

const { Given, When, Then } = createBdd();

When('I select {string} from the sort dropdown', async ({ page }, sortOption: string) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortProductsBy(sortOption as any);
});

Then('The inventory items should be sorted in {string} order by {string}', async ({ page }, sortOrder: string, sortBy: string) => {
    const productsPage = new ProductsPage(page);
    await productsPage.getProductNames().then(async (productNames) => {
        await productsPage.getProductPrices().then(async (productPrices) => {
            if (sortBy === 'name') {
                const sortedNames = [...productNames].sort((a, b) => sortOrder === 'ascending' ? a.localeCompare(b) : b.localeCompare(a));
                expect(productNames).toEqual(sortedNames);
            } else if (sortBy === 'price') {
                const sortedPrices = [...productPrices].sort((a, b) => sortOrder === 'ascending' ? a - b : b - a);
                expect(productPrices).toEqual(sortedPrices);
            }
        });
    });
});