const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckOutPage');

const loginData =
    require('../testData/loginData.json');

const checkoutData =
    require('../testData/checkoutData.json');

const { BASE_URL } =
    require('../utils/env');

test('@smoke Complete Checkout Flow',
async ({ page }) => {

    await page.goto(BASE_URL);

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.login(
        loginData[0].username,
        loginData[0].password
    );

    await productsPage.addBackpack();

    await productsPage.addBikeLight();

    await productsPage.openCart();

    await cartPage.clickCheckout();

    await checkoutPage.enterCustomerDetails(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );

    await checkoutPage.finishOrder();

    await expect(
        checkoutPage.successMessage
    ).toHaveText(
        'Thank you for your order!'
    );
});