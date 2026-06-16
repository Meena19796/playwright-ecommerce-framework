const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');

const loginData =
    require('../testData/loginData.json');

const { BASE_URL } =
    require('../utils/env');

test('@smoke Add Products And Verify Cart Count',
async ({ page }) => {

    // Launch Application
    await page.goto(BASE_URL);

    // Create Page Objects
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Login
    await loginPage.login(
        loginData[0].username,
        loginData[0].password
    );

    // Verify Login Success
    await expect(page)
        .toHaveURL(/inventory/);

    // Add Products
    await productsPage.addBackpack();

    await productsPage.addBikeLight();

    // Verify Cart Count
    await expect(
        productsPage.cartBadge
    ).toHaveText('2');

});