import { test, expect } from '../../fixtures/fixtures';
import { users } from '../../test-data/users';

test.describe('Logowanie', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('@smoke poprawne logowanie przekierowuje na listę produktów', async ({ loginPage, inventoryPage, page }) => {
    await loginPage.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('błędne hasło pokazuje komunikat o błędzie', async ({ loginPage }) => {
    await loginPage.login(users.standard.username, 'zle_haslo');

    await expect(loginPage.errorMessage).toContainText('do not match');
  });

  test('zablokowany użytkownik nie może się zalogować', async ({ loginPage }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);

    await expect(loginPage.errorMessage).toContainText('locked out');
  });

  test('puste pola wymagają podania loginu', async ({ loginPage }) => {
    await loginPage.loginButton.click();

    await expect(loginPage.errorMessage).toContainText('Username is required');
  });
});
