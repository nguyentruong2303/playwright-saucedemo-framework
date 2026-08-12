import { Locator, Page } from '@playwright/test';

export class CheckoutCompletePage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly ponyExpressLogo: Locator;
    readonly completeHeader: Locator;
    readonly backHomeButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.ponyExpressLogo = page.locator('.pony_express');
        this.completeHeader = page.locator('.complete-header');
        this.backHomeButton = page.locator('#back-to-products');
    }
    
    async getPageTitle() {
        return await this.pageTitle.textContent();
    }

    async isPonyExpressLogoVisible(): Promise<boolean> {
        return await this.ponyExpressLogo.isVisible();
    }

    async getCompleteHeaderText() {
        return await this.completeHeader.textContent();
    }

    async clickBackHomeButton() {
        await this.backHomeButton.click();
    }
}