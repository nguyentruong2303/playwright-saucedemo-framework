import { test, expect } from '../fixtures/page-object';

test.describe('Checkout Step Two Page Tests', () => {
    test('should display the correct page title on checkout step two page', async ({ productsPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage }) => {
        // Step 1: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Step 2: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Step 3: Fill in checkout information
        await checkoutStepOnePage.fillCheckoutInformation('John', 'Doe', '12345');

        // Verify the product name, price and quantity on the checkout step two page
        const itemNameExpected = 'Sauce Labs Backpack';
        const itemPriceExpected = '$29.99';
        const itemQuantityExpected = '1';

        // Verify the item name on the checkout step two page
        const itemNameOnCheckoutStepTwoPage = await checkoutStepTwoPage.getNameOfItemInCheckout(itemNameExpected);
        expect(itemNameOnCheckoutStepTwoPage).toBe(itemNameExpected);

        // Verify the item price on the checkout step two page
        const itemPriceOnCheckoutStepTwoPage = await checkoutStepTwoPage.getPriceOfItemInCheckout(itemNameExpected);
        expect(itemPriceOnCheckoutStepTwoPage).toBe(itemPriceExpected);

        // Verify the item quantity on the checkout step two page
        const itemQuantityOnCheckoutStepTwoPage = await checkoutStepTwoPage.getQuanlityOfItemInCheckout(itemNameExpected);
        expect(itemQuantityOnCheckoutStepTwoPage).toBe(itemQuantityExpected);
    });

    test('should display the correct item total, tax, and total price on checkout step two page', async ({ productsPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage }) => {
        // Step 1: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');
        await productsPage.addProductToCartByName('Sauce Labs Bike Light');

        // Step 2: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Step 3: Fill in checkout information
        await checkoutStepOnePage.fillCheckoutInformation('John', 'Doe', '12345');

        // Verify the item total, tax, and total price on the checkout step two page
        const itemTotalExpected = await checkoutStepTwoPage.getItemTotalPrice().then(text => text?.replace('Item total: $', '') || '0');
        const taxExpected = (parseFloat(itemTotalExpected) * 0.08).toFixed(2);
        const totalExpected = (parseFloat(itemTotalExpected) + parseFloat(taxExpected)).toFixed(2);

        const itemTotalOnCheckoutStepTwoPage = await checkoutStepTwoPage.getItemTotalPrice();
        expect(itemTotalOnCheckoutStepTwoPage).toBe(itemTotalExpected);

        const taxOnCheckoutStepTwoPage = await checkoutStepTwoPage.getTaxPrice();
        expect(taxOnCheckoutStepTwoPage).toBe(taxExpected);

        const totalOnCheckoutStepTwoPage = await checkoutStepTwoPage.getTotalPrice();
        expect(totalOnCheckoutStepTwoPage).toBe(totalExpected);
    });

    test('should navigate back to the cart page when clicking the cancel button on checkout step two page', async ({ productsPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage }) => {
        // Step 1: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Step 2: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Step 3: Fill in checkout information
        await checkoutStepOnePage.fillCheckoutInformation('John', 'Doe', '12345');

        // Click the cancel button on the checkout step two page
        await checkoutStepTwoPage.clickCancelButton();

        // Verify that the user is redirected back to the Product page by checking the page title
        const productsPageTitle = await productsPage.getPageTitle();
        expect(productsPageTitle).toBe('Products');
    });

    test('should finish the checkout process and navigate to the checkout complete page', async ({ productsPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
        // Step 1: Add a product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Step 2: Proceed to checkout
        await productsPage.goToCart();
        await cartPage.clickCheckoutButton();

        // Step 3: Fill in checkout information
        await checkoutStepOnePage.fillCheckoutInformation('John', 'Doe', '12345');

        // Step 4: Finish the checkout process
        await checkoutStepTwoPage.clickContinueButton();

        // Verify that the user is redirected to the checkout complete page by checking the page title
        const checkoutCompletePageTitle = await checkoutCompletePage.getPageTitle();
        expect(checkoutCompletePageTitle).toBe('Checkout: Complete!');
    });
});