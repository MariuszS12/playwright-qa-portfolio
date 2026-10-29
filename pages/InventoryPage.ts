import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByTestId('title');
    this.cartLink = page.getByTestId('shopping-cart-link');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
  }

  async addToCart(productId: string) {
    await this.page.getByTestId(`add-to-cart-${productId}`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
