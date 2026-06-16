class ProductsPage {

    constructor(page){

        this.page = page;

        this.backpackButton =
        page.locator(
            '#add-to-cart-sauce-labs-backpack'
        );

        this.bikeLightButton =
        page.locator(
            '#add-to-cart-sauce-labs-bike-light'
        );

        this.cartIcon =
        page.locator('.shopping_cart_link');

        this.cartBadge =
        page.locator('.shopping_cart_badge');
    }

    async addBackpack(){

        await this.backpackButton.click();
    }

    async addBikeLight(){

        await this.bikeLightButton.click();
    }

    async openCart(){

        await this.cartIcon.click();
    }
}

module.exports = ProductsPage;