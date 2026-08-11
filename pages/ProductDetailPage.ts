import { Locator, Page } from '@playwright/test';

export class ProductDetailPage {
    readonly page: Page;
    readonly backButton: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly productImage: Locator;
    readonly addToCartButton: Locator;
    readonly removeFromCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backButton = page.locator('[data-test="back-to-products"]');
        this.productName = page.locator('.inventory_details_name');
        this.productDescription = page.locator('.inventory_details_desc');
        this.productPrice = page.locator('.inventory_details_price');
        this.productImage = page.locator('.inventory_details_img');
        this.addToCartButton = page.locator('button[data-test^="add-to-cart"]');
        this.removeFromCartButton = page.locator('button[data-test^="remove"]');
    }

    async backToProducts() {
        await this.backButton.click();
    }

    async clickRemoveFromCartButton() {
        await this.removeFromCartButton.click();
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }
}
