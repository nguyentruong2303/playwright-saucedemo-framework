import { test, expect } from '../fixtures/page-object';

test.describe('End to End Checkout Flow', () => {
    test('should complete the checkout process successfully', async ({ loginPage, productsPage, cartPage, checkoutPage }) => {
        // Step 1: Log in to the application
        await loginPage.navigateLogin();
        await loginPage.login('standard_user', 'secret_sauce');

        // Step 2: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Step 3: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.proceedToCheckout();

        // Step 4: Fill in checkout information
        await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');

        // Step 5: Complete the purchase
        await checkoutPage.finishCheckout();

        // Step 6: Verify the order confirmation
        await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');});
});