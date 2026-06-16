const { test, expect }
= require('@playwright/test');

const LoginPage =
require('../pages/LoginPage');

const loginData =
require('../testData/loginData.json');

const {
 BASE_URL
}
= require('../utils/env');

loginData.forEach(data => {

    test(data.scenario,
    async ({ page }) => {

        await page.goto(BASE_URL);

        const loginPage =
        new LoginPage(page);

        await loginPage.login(
            data.username,
            data.password
        );

        if(data.expected === 'success'){

            await expect(page)
                .toHaveURL(/inventory/);

        } else {

            await expect(
                loginPage.errorMessage
            ).toBeVisible();
        }

    });
});