import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../test-data/users';

type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  loggedInInventory: InventoryPage; // użytkownik już zalogowany
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  loggedInInventory: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await use(new InventoryPage(page));
  },
});

export { expect } from '@playwright/test';
