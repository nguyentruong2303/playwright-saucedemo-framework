import { test, expect } from '../fixtures/page-object';

test.describe('End to End Checkout Flow', () => {
    test('should complete the checkout process successfully', async ({ productsPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage }) => {

        // Step 1: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Step 3: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Step 4: Fill in checkout information
        await checkoutStepOnePage.fillCheckoutInformation('John', 'Doe', '12345');

        // Verify that the user is redirected to the checkout step two page by checking the page title
        const checkoutStepTwoPageTitle = await checkoutStepTwoPage.getPageTitle();
        expect(checkoutStepTwoPageTitle).toBe('Checkout: Overview');
    });

    test('should a message "First Name is required" when the first name field is empty', async ({ productsPage, cartPage, checkoutStepOnePage }) => {
        // Step 1: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Step 3: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Step 4: Fill in checkout information with an empty first name
        await checkoutStepOnePage.fillCheckoutInformation('', 'Doe', '12345');  

        // Verify that the error message is displayed
        const errorMessage = await checkoutStepOnePage.getErrorMessage();
        expect(errorMessage).toBe('Error: First Name is required');
    });

    test('should a message "Last Name is required" when the last name field is empty', async ({ productsPage, cartPage, checkoutStepOnePage }) => {
        // Step 1: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Step 3: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Step 4: Fill in checkout information with an empty last name
        await checkoutStepOnePage.fillCheckoutInformation('John', '', '12345');

        // Verify that the error message is displayed
        const errorMessage = await checkoutStepOnePage.getErrorMessage();
        expect(errorMessage).toBe('Error: Last Name is required');
    });

    test('should a message "Postal Code is required" when the postal code field is empty', async ({ productsPage, cartPage, checkoutStepOnePage }) => {
        // Step 1: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Step 3: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Step 4: Fill in checkout information with an empty postal code
        await checkoutStepOnePage.fillCheckoutInformation('John', 'Doe', '');

        // Verify that the error message is displayed
        const errorMessage = await checkoutStepOnePage.getErrorMessage();
        expect(errorMessage).toBe('Error: Postal Code is required');
    });

    test('should cancel the checkout process and return to the carts page', async ({ productsPage, cartPage, checkoutStepOnePage }) => {
        // Step 1: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Step 3: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Step 4: Click the cancel button on the checkout step one page
        await checkoutStepOnePage.clickCancelButton();

        // Verify that the user is redirected back to the cart page by checking the page title
        const cartPageTitle = await cartPage.getPageTitle();
        expect(cartPageTitle).toBe('Your Cart');

        // Verify that the product is still in the cart after canceling the checkout process
        const isItemVisible = await cartPage.isCartItemVisible('Sauce Labs Backpack');
        expect(isItemVisible).toBe(true);
    });
})