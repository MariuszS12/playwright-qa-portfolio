import { Before, After, Status, ITestCaseHookParameter } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext({ baseURL: 'https://www.saucedemo.com' });
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png'); // zrzut ekranu trafi do raportu
  }
  await this.context.close();
  await this.browser.close();
});
