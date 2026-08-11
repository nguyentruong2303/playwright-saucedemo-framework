import { test, expect } from '../fixtures/page-object';

test.describe('SauceDemo Inventory Cart Functionality', () => {
    test('should display Remove button after adding a product to the cart and display Add to Cart button after removing the product from the cart', async ({ productsPage }) => {

        // Add the first product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');

        // Verify number of items in the cart is now 1
        const initialCartCount = await productsPage.getNumberOfItemsInCart();
        expect(initialCartCount).toBe(1);

        // Add another product to the cart
        await productsPage.addProductToCartByName('Sauce Labs Bike Light');

        // Verify that the Remove button is displayed for the added product
        const removeButton = await productsPage.getRemoveButtonByName('Sauce Labs Backpack');
        await expect(removeButton).toBeVisible();

        // Verify number of items in the cart is now 2
        const updatedCartCount = await productsPage.getNumberOfItemsInCart();
        expect(updatedCartCount).toBe(2);

        // Remove the product from the cart
        await removeButton.click();

        // Verify that the Add to Cart button is displayed again for the removed product
        const addToCartButton = await productsPage.getAddToCartButtonByName('Sauce Labs Backpack');
        await expect(addToCartButton).toBeVisible();

        // Verify number of items in the cart is now 1
        const finalCartCount = await productsPage.getNumberOfItemsInCart();
        expect(finalCartCount).toBe(1);
    });

    test('should display the correct number of cart items when adding many products to the cart', async ({ productsPage }) => {
        // Add multiple products to the cart
        await productsPage.addProductToCartByName('Sauce Labs Backpack');
        await productsPage.addProductToCartByName('Sauce Labs Bike Light');
        await productsPage.addProductToCartByName('Sauce Labs Bolt T-Shirt');

        // Verify that the number of items in the cart is 3
        const cartCount = await productsPage.getNumberOfItemsInCart();
        expect(cartCount).toBe(3);
    });

    test('Verify user can add and remove products from product detail page and the cart count updates correctly', async ({ productsPage, productDetailPage }) => {
        // Add a product to the cart from the products page
        await productsPage.addProductToCartByName('Sauce Labs Bike Light');
        
        // Open the product detail page for "Sauce Labs Backpack"
        await productsPage.openProductByName('Sauce Labs Backpack');

        // Add the product to the cart from the product detail page
        await productDetailPage.clickAddToCartButton();

        // Go back to the products page
        await productDetailPage.backToProducts();

        // Verify that the number of items in the cart is now 2
        const cartCountAfterAdd = await productsPage.getNumberOfItemsInCart();
        expect(cartCountAfterAdd).toBe(2);

        // Remove the product from the cart from the products detail page
        await productsPage.openProductByName('Sauce Labs Backpack');
        await productDetailPage.clickRemoveFromCartButton(); // This will remove the product since it's already in the cart

        // Go back to the products page
        await productDetailPage.backToProducts();

        // Verify that the number of items in the cart is now `
        const cartCountAfterRemove = await productsPage.getNumberOfItemsInCart();
        expect(cartCountAfterRemove).toBe(1);
    });
});