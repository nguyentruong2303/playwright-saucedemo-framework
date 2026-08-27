import { Locator, Page } from '@playwright/test';

export class CheckoutStepTwoPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly finishButton: Locator;
    readonly completeHeader: Locator;
    readonly itemTotalPrice: Locator;
    readonly taxPrice: Locator;
    readonly totalPrice: Locator;
    readonly cancelButton: Locator;
    readonly finishButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.finishButton = page.locator('#finish');
        this.completeHeader = page.locator('.complete-header');
        this.itemTotalPrice = page.locator('.summary_subtotal_label');
        this.taxPrice = page.locator('.summary_tax_label');
        this.totalPrice = page.locator('.summary_total_label');
        this.cancelButton = page.locator('#cancel');
        this.finishButtonLocator = page.locator('#finish');
    }

    async getPageTitle() {
        return await this.pageTitle.textContent();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async getQuanlityOfItemInCheckout(itemName: string) {
        const itemQuantityLocator = this.page.locator(`//div[text()='${itemName}']//ancestor::div[@class='cart_item']//div[@class='cart_quantity']`);
        return await itemQuantityLocator.textContent();
    }

    async getPriceOfItemInCheckout(itemName: string) {
        const itemPriceLocator = this.page.locator(`//div[text()='${itemName}']//ancestor::div[@class='cart_item_label']//div[@class='inventory_item_price']`);
        return await itemPriceLocator.textContent();
    }

    async getNameOfItemInCheckout(itemName: string) {
        const itemNameLocator = this.page.locator('.inventory_item_name', { hasText: itemName });
        return await itemNameLocator.textContent();
    }

    async getAllItemsInCheckout() {
        const cartItems = this.page.locator('.cart_item');
        const items = [];
        const count = await cartItems.count();
        for (let i = 0; i < count; i++) {
            const item = cartItems.nth(i);
            const name = await item.locator('.inventory_item_name').textContent();
            const price = await item.locator('.inventory_item_price').textContent();
            const quantity = await item.locator('.cart_quantity').textContent();

            items.push({name,price,quantity})
        }
        return items;
    }

    async getItemTotalPrice() {
        return await this.itemTotalPrice.textContent().then(text => text?.replace('Item total: $', ''));
    }

    async getTaxPrice() {
        return await this.taxPrice.textContent().then(text => text?.replace('Tax: $', ''));
    }

    async getTotalPrice() {
        return await this.totalPrice.textContent().then(text => text?.replace('Total: $', ''));
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }

    async clickContinueButton() {
        await this.finishButtonLocator.click();
    }

    async getPriceTotal() {
        const prices = [];
        const item = await this.itemTotalPrice.textContent().then(text => text?.replace('Item total: ', ''));
        const tax = await this.taxPrice.textContent().then(text => text?.replace('Tax: ', ''));
        const total = await this.totalPrice.textContent().then(text => text?.replace('Total: ', ''));
        
        return {
        'item': item?.replace('Item total: ', '').trim() ?? '',
        'tax': tax?.replace('Tax: ', '').trim() ?? '',
        'total': total?.replace('Total: ', '').trim() ?? '',
        };
    }
}