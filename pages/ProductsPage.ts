import { Locator, Page } from '@playwright/test';

export type SortOptions = 'az' | 'za' | 'lohi' | 'hilo';

export class ProductsPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly backpackAddToCartButton: Locator;
    readonly shopingCartBadge: Locator;
    readonly productNameElements: Locator;
    readonly productPriceElements: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.backpackAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shopingCartBadge = page.locator('.shopping_cart_badge');
        this.productNameElements = page.locator('.inventory_item_name');
        this.productPriceElements = page.locator('.inventory_item_price');
    }

    async addBackpackToCart() {
        await this.backpackAddToCartButton.click();
    }

    async sortProductsBy(option: SortOptions) {
        const sortDropdown = this.page.locator('.product_sort_container');
        await sortDropdown.selectOption({ value: option });
    }

    // Get all product names as an array of strings
    async getProductNames(): Promise<string[]> {
        await this.productNameElements.first().waitFor({ state: 'visible' });
        return await this.productNameElements.allTextContents();
    }

    // Get all product prices as an array of numbers
    async getProductPrices(): Promise<number[]> {
        await this.productPriceElements.first().waitFor({ state: 'visible' });
        const priceStrings = await this.productPriceElements.allTextContents();

        // Convert price strings like "$29.99" to numbers like 29.99
        return priceStrings.map(price => parseFloat(price.replace('$', '')));
    }
}