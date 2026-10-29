import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly items: Locator;

  constructor(page: Page) {
    this.page = page;
    this.items = page.getByTestId('inventory-item-name');
  }
}
