import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { DataTable } from '@cucumber/cucumber';
import { CheckoutStepOnePage } from "../pages/CheckoutStepOnePage";

const { Given, When, Then} = createBdd();

When('I enter the following fields:', async ({ page }, dataTable: DataTable) => {
  const checkoutStepOnePage = new CheckoutStepOnePage(page);
  const data = dataTable.rowsHash();

  await checkoutStepOnePage.fillCheckoutInformation(
    data.firstName,
    data.lastName,
    data.postalCode
  );
});

Then('I verify that a message {string} is displayed', async({ page }, message: string) => {
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    const actualMessage = await checkoutStepOnePage.getErrorMessage();
    expect(actualMessage).toBe(message);
})

When('I click on Cancel button in checkout process', async({ page }) => {
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    await checkoutStepOnePage.clickCancelButton();
})

