import { Page, Locator } from '@playwright/test';

export class AjaxFormSubmitLocators {
  readonly ajaxFormSubmitHeading: Locator;
  readonly nameField: Locator;
  readonly messageField: Locator;
  readonly submitButton: Locator;
  readonly ajaxImage: Locator;
  readonly ajaxBox: Locator;

  constructor(public page: Page) {
    this.ajaxFormSubmitHeading = page.locator('//h1[text()="Form Submit Demo"]'); 
    this.nameField = page.locator('//input[@id="title"]');
    this.messageField = page.locator('//textarea[@id="description"]');
    this.submitButton = page.locator('//input[@name="btn-submit"]');
    this.ajaxImage = page.locator("//div[@id='submit-control']/img");
    this.ajaxBox = page.locator("//div[@id='submit-control']");
  }
}
