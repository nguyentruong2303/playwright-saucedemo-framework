import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { CheckoutStepTwoPage } from "../pages/CheckoutStepTwoPage";

const { Given, When, Then} = createBdd();

Then('I verify that redirected to the checkout step two page', async ({ page }) => {
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    const checkoutStepTwoPageTitle = await checkoutStepTwoPage.getPageTitle();
    expect(checkoutStepTwoPageTitle).toBe('Checkout: Overview');
})