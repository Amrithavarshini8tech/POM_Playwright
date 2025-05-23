import { expect } from "@playwright/test";
import { Page } from "@playwright/test";

class DashBoardPO {
  page: Page;
  addToCart: any;
  cart: any;
  checkout: any;
  inventory_item_name: any;
    dropdown: any;
    footerLinks: any;
    remove: any;
    AddedCart: any;
  constructor(page) {
    this.page = page;
    this.addToCart = page.locator('div.inventory_item_name ');
    this.cart = page.locator("a[class='shopping_cart_link']");
    this.checkout = page.locator("button[name='checkout']");
    this.inventory_item_name=page.locator(".inventory_item_name ");
    this.dropdown=page.locator('.product_sort_container');
    this.footerLinks=page.locator('footer a');
    this.remove=page.locator('remove-sauce-labs-backpack');
    this.AddedCart=page.locator('button[id^="add-to-cart"]');
  }
  
async checkAllTitles() {
     await expect(this.page).toHaveTitle('Swag Labs');
    await this.page.waitForLoadState('networkidle'); // wait for the page to load
    const expectedValues = [
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)'
    ];
    const allTitles = await this.inventory_item_name.allTextContents(); // allTextContent won't wait till all elements are displayed
    console.log("all titles are " + allTitles);
    expect(allTitles).toEqual(expectedValues);
    console.log("Zeroth title ", await this.inventory_item_name.nth(0).textContent());
}

async selectFromDropdown(){
    const dropdown = await this.dropdown;
    await dropdown.selectOption('za'); // select the option from the dropdown
}
async checkAllFooterLinks() {
    // Get only the URLs from the footer (bottom) of the page
    const footerLinks = await this.footerLinks.evaluateAll((links: any) => links.map((link: any) => link.href));
    console.log('Footer URLs on the page:', footerLinks);
    const footerLinksExpected = [
        'https://twitter.com/saucelabs',
        'https://www.facebook.com/saucelabs',
        'https://www.linkedin.com/company/sauce-labs/'
    ];
    expect(footerLinks).toEqual(footerLinksExpected);
}
async checkAddToCart() {

    const addToCartButton = await this.addToCart.allTextContents();
    const count = addToCartButton.length;
    for (let i = 0; i < count; i++) {
        const addToCartButtonText = await this.addToCart.nth(i).textContent();
        if (addToCartButtonText === 'Sauce Labs Backpack') {
            await this.AddedCart.nth(i).click();
            break;
        }
    }
    await this.remove.isVisible();
}
}
export { DashBoardPO };