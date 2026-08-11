import { Locator, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly cartItemNames: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
        this.cartItemNames = page.locator('.inventory_item_name');
        this.continueShoppingButton = page.locator('#continue-shopping');
    }

    async clickCheckoutButton(): Promise<void> {
        await this.checkoutButton.click();
    }

    async getItemNamesInCart(itemName: string): Promise<string | null> {
        const itemNameLocator = this.page.locator('.inventory_item_name', { hasText: itemName });
        return await itemNameLocator.textContent();
    }

    async getPriceOfItemInCart(itemName: string){
        const itemPriceLocator = this.page.locator(`//div[text()='${itemName}']//ancestor::div[@class='cart_item_label']//div[@class='inventory_item_price']`);
        return await itemPriceLocator.textContent();
    }

    async getQuantityOfItemInCart(itemName: string){
        const itemQuantityLocator = this.page.locator(`//div[text()='${itemName}']//ancestor::div[@class='cart_item']//div[@class='cart_quantity']`);
        return await itemQuantityLocator.textContent();
    }

    async isCartItemVisible(productName: string): Promise<boolean> {
        const cartItemLocator = this.page.locator(`.cart_item:has-text("${productName}")`);
        return await cartItemLocator.isVisible();
    }

    async removeItemFromCartByName(productName: string): Promise<void> {
        const removeButtonLocator = this.page.locator(`//div[text()='${productName}']//ancestor::div[@class='cart_item']//button[text()='Remove']`);
        await removeButtonLocator.click();
    }

    async clickContinueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }
}