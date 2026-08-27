import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";
import { DataTable } from "@cucumber/cucumber";

const { Given, When, Then} = createBdd();

Then('I verify that redirected to the checkout complete page', async ({page}) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);
    const completeHeaderText = await checkoutCompletePage.getCompleteHeaderText();
    expect(completeHeaderText).toBe('Thank you for your order!');
})

When('I click on Back Home button', async ({page}) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await checkoutCompletePage.clickBackHomeButton();
})