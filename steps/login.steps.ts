import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the login page', async function (this: CustomWorld) {
  await this.loginPage.goto();
});

When(
  'I log in as {string} with password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.login(username, password);
  }
);

Then('I see the products page', async function (this: CustomWorld) {
  await expect(this.inventoryPage.title).toHaveText('Products');
});

Then(
  'I see the error message containing {string}',
  async function (this: CustomWorld, text: string) {
    await expect(this.loginPage.errorMessage).toContainText(text);
  }
);
