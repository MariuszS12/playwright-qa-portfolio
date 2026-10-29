import { setWorldConstructor, setDefaultTimeout, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

setDefaultTimeout(30_000);

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  inventoryPage!: InventoryPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
