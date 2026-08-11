import { test, expect } from "../fixtures/page-object";

test.describe('SauceDemo Shopping Cart Functionality', () => {
    test('should add a product to the cart and verify the cart count, name, price, and quantity', async ({ productsPage, cartPage }) => {
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Verify that the shopping cart badge shows 1 item
        await expect(productsPage.shopingCartBadge).toHaveText('1');

        await productsPage.goToCart();
        const itemNameExpected = 'Sauce Labs Backpack';
        const itemPriceExpected = '$29.99';
        const itemQuantityExpected = '1';

        // Verify the item name in the cart
        const itemNameInCart = await cartPage.getItemNamesInCart(itemNameExpected);
        expect(itemNameInCart).toBe(itemNameExpected);

        // Verify the item price in the cart
        const itemPriceInCart = await cartPage.getPriceOfItemInCart(itemNameExpected);
        expect(itemPriceInCart).toBe(itemPriceExpected);

        // Verify the item quantity in the cart
        const itemQuantityInCart = await cartPage.getQuantityOfItemInCart(itemNameExpected);
        expect(itemQuantityInCart).toBe(itemQuantityExpected);
    });

    test('should remove a product from the cart and verify the product is no longer visible in the cart', async ({ productsPage, cartPage }) => {
        await productsPage.addProductToCartByName('Sauce Labs Backpack');
        await productsPage.addProductToCartByName('Sauce Labs Bike Light');

        // Verify that the shopping cart badge shows 2 items
        await expect(productsPage.shopingCartBadge).toHaveText('2');

        await productsPage.goToCart();

        // Verify that the product is visible in the cart before removal
        const isItemVisibleBeforeRemoval = await cartPage.isCartItemVisible('Sauce Labs Backpack');
        expect(isItemVisibleBeforeRemoval).toBe(true);

        // Remove the product from the cart
        await cartPage.removeItemFromCartByName('Sauce Labs Backpack');

        // Verify that the product is no longer visible in the cart after removal
        const isItemVisibleAfterRemoval = await cartPage.isCartItemVisible('Sauce Labs Backpack');
        expect(isItemVisibleAfterRemoval).toBe(false);

        // Verify that the shopping cart badge shows 1 item after removal
        await expect(productsPage.shopingCartBadge).toHaveText('1');
    });

    test('should badge number of items in the cart is no longer visible when no items are in the cart', async ({ productsPage, cartPage }) => {

        await productsPage.goToCart();

        // Verify that the shopping cart badge is no longer visible
        const isBadgeVisible = await productsPage.isNumberOfItemInCartVisible();
        expect(isBadgeVisible).toBe(false);

    });

    test('should continue shopping from the cart and verify the user is redirected back to the products page', async ({ productsPage, cartPage }) => {
        await productsPage.addProductToCartByName('Sauce Labs Backpack');
        await productsPage.goToCart();

        // Click the "Continue Shopping" button
        await cartPage.clickContinueShopping();

        // Verify that the user is redirected back to the products page by checking the page title
        const pageTitle = await productsPage.pageTitle.textContent();
        expect(pageTitle).toBe('Products');
    });

    test('should verify checkout button navigates to the checkout page', async ({ productsPage, cartPage, checkoutStepOnePage }) => {
        await productsPage.addProductToCartByName('Sauce Labs Backpack');
        await productsPage.goToCart();

        // Click the "Checkout" button
        await cartPage.clickCheckoutButton();

        // Verify that the user is redirected to the checkout page by checking the page title
        const checkoutPageTitle = await checkoutStepOnePage.pageTitle.textContent();
        expect(checkoutPageTitle).toBe('Checkout: Your Information');
    });
        
})