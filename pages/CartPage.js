class CartPage {

    constructor(page) {

        this.page = page;

        this.backpackProduct =
            page.locator('[data-test="inventory-item-name"]')
                .filter({ hasText: 'Sauce Labs Backpack' });

        this.bikeLightProduct =
            page.locator('[data-test="inventory-item-name"]')
                .filter({ hasText: 'Sauce Labs Bike Light' });

        this.checkoutButton =
            page.locator('#checkout');
    }

    async clickCheckout() {

        await this.checkoutButton.click();
    }
}

module.exports = CartPage;