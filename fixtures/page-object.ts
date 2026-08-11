import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { SideBarMenuPage } from '../pages/SideBarMenuPage';

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
    productDetailPage: ProductDetailPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    sideBarMenuPage: SideBarMenuPage;
};

export const test = base.extend<MyFixtures>({

    page: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateLogin();
        await loginPage.login('standard_user', 'secret_sauce');
        await use(page);
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },
    productDetailPage: async ({ page }, use) => {
        const productDetailPage = new ProductDetailPage(page);
        await use(productDetailPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },
    sideBarMenuPage: async ({ page }, use) => {
        const sideBarMenuPage = new SideBarMenuPage(page);
        await use(sideBarMenuPage);
    }
});

export { expect } from '@playwright/test';