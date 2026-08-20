import { Locator, Page } from '@playwright/test';

export type SortOptions = 'az' | 'za' | 'lohi' | 'hilo';

export class ProductsPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly backpackAddToCartButton: Locator;
    readonly shopingCartBadge: Locator;
    readonly productItems: Locator;
    readonly productNameElements: Locator;
    readonly productPriceElements: Locator;
    readonly productImageElements: Locator;
    readonly productDescriptionElements: Locator;
    readonly shoppingCartLink: Locator;
    readonly numberOfCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.backpackAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shopingCartBadge = page.locator('.shopping_cart_badge');
        this.productItems = page.locator('.inventory_item');
        this.productNameElements = page.locator('.inventory_item_name');
        this.productPriceElements = page.locator('.inventory_item_price');
        this.productImageElements = page.locator('.inventory_item_img img');
        this.productDescriptionElements = page.locator('.inventory_item_desc');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.numberOfCart = page.locator('.shopping_cart_badge');
    }

    async addBackpackToCart() {
        await this.backpackAddToCartButton.click();
    }

    // Click on a product's name to navigate to its detail page
    async openProductByName(productName: string) {
        await this.page.locator('.inventory_item_name', { hasText: productName }).click();
    }

    async goToCart() {
        await this.shoppingCartLink.click();
    }

    async addProductToCartByName(productName: string) {
        const productLocator = this.page.locator(`//div[text()='${productName}']//ancestor::div[@class='inventory_item_description']//button[text()='Add to cart']`);
        await productLocator.click();
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

    async getRemoveButtonByName(productName: string): Promise<Locator> {
        return this.page.locator(`//div[text()='${productName}']//ancestor::div[@class='inventory_item_description']//button[text()='Remove']`);
    }

    async getAddToCartButtonByName(productName: string): Promise<Locator> {
        return this.page.locator(`//div[text()='${productName}']//ancestor::div[@class='inventory_item_description']//button[text()='Add to cart']`);
    }

    async getNumberOfItemsInCart(): Promise<number> {
        const badgeText = await this.numberOfCart.textContent();
        return badgeText ? parseInt(badgeText) : 0;
    }

    async isNumberOfItemInCartVisible(): Promise<boolean> {
        return await this.numberOfCart.isVisible();
    }

    async getPageTitle(): Promise<string | null> {
        return await this.pageTitle.textContent();
    }

    async addProductToCart(productName: string) {
  await this.page
    .locator('.inventory_item')
    .filter({ hasText: productName })
    .getByRole('button', { name: 'Add to cart' })
    .click();
}
}