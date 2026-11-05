import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstnameInput: Locator;
  readonly lastnameInput: Locator;
  readonly postalcodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;
  readonly title: Locator;


  constructor(page: Page) {
    this.page = page;
    this.firstnameInput = page.getByTestId('firstName');
    this.lastnameInput = page.getByTestId('lastName');
    this.postalcodeInput = page.getByTestId('postalCode');
    this.continueButton = page.getByTestId('continue');
    this.finishButton = page.getByTestId('finish');
    this.completeHeader = page.getByTestId('complete-header');
    this.title = page.getByTestId('title');
  }

  async fillInputs(firstname: string, lastname: string, postalcode: string) {
    await this.firstnameInput.fill(firstname);
    await this.lastnameInput.fill(lastname);
    await this.postalcodeInput.fill(postalcode);
    await this.continueButton.click();
  }
}
