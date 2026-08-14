import { Locator, Page } from '@playwright/test';

export class SideBarMenuPage {
    readonly page: Page;
    readonly menuButton: Locator;
    readonly closeMenuButton: Locator;
    readonly allItemsLink: Locator;
    readonly aboutLink: Locator;
    readonly logoutLink: Locator;
    readonly resetAppStateLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.closeMenuButton = page.locator('#react-burger-cross-btn');
        this.allItemsLink = page.locator('#inventory_sidebar_link');
        this.aboutLink = page.locator('#about_sidebar_link');
        this.logoutLink = page.locator('#logout_sidebar_link');
        this.resetAppStateLink = page.locator('#reset_sidebar_link');
    }

    async openMenu() {
        await this.menuButton.click();
    }

    async closeMenu() {
        await this.closeMenuButton.click();
    }

    async clickAllItems() {
        await this.allItemsLink.click();
    }

    async clickAbout() {
        await this.aboutLink.click();
    }

    async clickLogout() {
        await this.logoutLink.click();
    }

    async clickResetAppState() {
        await this.resetAppStateLink.click();
    }

    async clickMenuLink(linkText: string) {
        const linkLocator = this.page.locator(`//a[text()='${linkText}']`);
        await linkLocator.click();
    }
}