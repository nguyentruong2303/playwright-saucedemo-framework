import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { CheckoutStepTwoPage } from "../pages/CheckoutStepTwoPage";
import { DataTable } from "@cucumber/cucumber";

const { Given, When, Then} = createBdd();

Then('I verify that redirected to the checkout step two page', async ({ page }) => {
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    const checkoutStepTwoPageTitle = await checkoutStepTwoPage.getPageTitle();
    expect(checkoutStepTwoPageTitle).toBe('Checkout: Overview');
})

Then('I verify that the cart contain the following items:', async ({page}, dataTable: DataTable) => {
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    const expectedItems = dataTable.hashes();
    const actualItems = await checkoutStepTwoPage.getAllItemsInCheckout();
    expect(expectedItems).toEqual(actualItems);
})

Then('I verify the price total is displayed correct in the following:', async ({page}, dataTable: DataTable) => {
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    const expectedPrices = dataTable.hashes()[0];
    const actualPrices = await checkoutStepTwoPage.getPriceTotal();
    expect(expectedPrices).toEqual(actualPrices);
})

When('I click on Finish button', async ({page}) => {
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    await checkoutStepTwoPage.clickContinueButton();
})

When('I click on Cancel button on the checkout step two page', async ({page}) => {
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    await checkoutStepTwoPage.clickCancelButton();
})