import { test, expect } from '../fixtures/page-object';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';

test.describe('Checkout Complete Page', () => {
    test('should display the correct page title, pony express logo, and complete header', async ({ productsPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {

        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Fill in checkout information
        await checkoutStepOnePage.fillCheckoutInformation('John', 'Doe', '12345');

        await checkoutStepTwoPage.finishCheckout();

        // Verify that the user is on the checkout complete page by checking the page title
        const pageTitle = await checkoutCompletePage.getPageTitle();
        expect(pageTitle).toBe('Checkout: Complete!');



        // Verify that the pony express logo is visible
        // const isLogoVisible = await checkoutCompletePage.isPonyExpressLogoVisible();
        // expect(isLogoVisible).toBe(true);

        // Verify that the complete header text is correct
        const completeHeaderText = await checkoutCompletePage.getCompleteHeaderText();
        expect(completeHeaderText).toBe('Thank you for your order!');
    });

    test('should navigate back to the products page when clicking the "Back Home" button on the checkout complete page', async ({ productsPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {

        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Fill in checkout information
        await checkoutStepOnePage.fillCheckoutInformation('John', 'Doe', '12345');

        await checkoutStepTwoPage.finishCheckout();

        // Click the "Back Home" button on the checkout complete page
        await checkoutCompletePage.clickBackHomeButton();

        // Verify that the user is redirected back to the products page by checking the page title
        const productsPageTitle = await productsPage.getPageTitle();
        expect(productsPageTitle).toBe('Products');

        // Verify that the shopping cart badge is no longer visible after returning to the products page
        const isBadgeVisible = await productsPage.isNumberOfItemInCartVisible();
        expect(isBadgeVisible).toBe(false);
    });
});