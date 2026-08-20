import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { DataTable } from '@cucumber/cucumber';
import { CartPage } from '../pages/CartPage';

const { Given, When, Then } = createBdd();

When('I remove all the products from the cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.removeAllProductsFromCart();
});

When('I click on Checkout button', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.clickCheckoutButton();
})

Then('I should be navigated back to the cart page', async ({ page }) => {
    const cartPage = new CartPage(page);
    const pageTitle = await cartPage.getPageTitle();
    expect(pageTitle).toBe("Your Cart");
})

Then('The cart should contain the following products:', async ({ page }, dataTable: DataTable) => {
  const cartPage = new CartPage(page);
  const expectedProducts = dataTable.raw().flat();
  const actualProducts = await cartPage.getAllItemNamesInCart();

  expect(actualProducts.sort()).toEqual(expectedProducts.sort());
});