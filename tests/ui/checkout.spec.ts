import { test, expect } from '../../fixtures/fixtures';
import { products, checkoutdates } from '../../test-data/users';

test.describe('Zakup', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('@smoke poprawne dodanie produktu i przjście do kasy', async ({ loggedInInventory, cartPage, checkoutPage, page}) => {
    await loggedInInventory.addToCart(products.tShirt.id);
    await loggedInInventory.openCart()
    await cartPage.goToCheckout()
    await checkoutPage.fillInputs(checkoutdates.first.firstname, checkoutdates.first.lastname, checkoutdates.first.postalcode)
    await checkoutPage.finishButton.click()
    await expect(checkoutPage.title).toHaveText('Checkout: Complete!');
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });
});
