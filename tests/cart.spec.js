const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

const loginData =
    require('../testData/loginData.json');

const { BASE_URL } =
    require('../utils/env');

test('@smoke Verify Cart Products',
async ({ page }) => {

    await page.goto(BASE_URL);

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.login(
        loginData[0].username,
        loginData[0].password
    );

    await productsPage.addBackpack();

    await productsPage.addBikeLight();

    await productsPage.openCart();

    await expect(
        cartPage.backpackProduct
    ).toBeVisible();

    await expect(
        cartPage.bikeLightProduct
    ).toBeVisible();
});