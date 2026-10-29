import { test, expect } from '../../fixtures/fixtures';
import { products } from '../../test-data/users';

test.describe('Koszyk', () => {
  test('@smoke dodanie produktu zwiększa licznik koszyka', async ({ loggedInInventory }) => {
    await loggedInInventory.addToCart(products.backpack.id);

    await expect(loggedInInventory.cartBadge).toHaveText('1');
  });

  test('dodany produkt jest widoczny w koszyku', async ({ loggedInInventory, cartPage }) => {
    await loggedInInventory.addToCart(products.backpack.id);
    await loggedInInventory.openCart();

    await expect(cartPage.items).toHaveText([products.backpack.name]);
  });

  test('dwa produkty w koszyku', async ({ loggedInInventory, cartPage }) => {
    await loggedInInventory.addToCart(products.backpack.id);
    await loggedInInventory.addToCart(products.bikeLight.id);
    await loggedInInventory.openCart();

    await expect(cartPage.items).toHaveCount(2);
  });
});
