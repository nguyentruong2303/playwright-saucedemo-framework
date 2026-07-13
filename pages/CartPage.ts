import { Locator, Page } from '@playwright/test';
import { CheckoutPage } from './CheckoutPage';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly cartItemNames: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
        this.cartItemNames = page.locator('.inventory_item_name');
    }

    async proceedToCheckout(): Promise<CheckoutPage> {
        await this.checkoutButton.click();
        return new CheckoutPage(this.page);
    }
}