import { Page } from '@playwright/test';
import { AjaxFormSubmitLocators } from './ajaxFormSubmit.locators';

export class AjaxFormSubmitActions {
  private locators: AjaxFormSubmitLocators;

  constructor(page: Page) {
    this.locators = new AjaxFormSubmitLocators(page);
  }

  async verifyHeadingVisible(): Promise<boolean> {
    await this.locators.page.waitForLoadState('domcontentloaded');
    await this.locators.ajaxFormSubmitHeading.waitFor({ state: 'visible' });
    return await this.locators.ajaxFormSubmitHeading.isVisible();
  }

  async fillName(name: string): Promise<void> {
    await this.locators.page.waitForLoadState('domcontentloaded');
    await this.locators.nameField.fill(name);
  }

  async fillMessage(message: string): Promise<void> {
    await this.locators.page.waitForLoadState('domcontentloaded');
    await this.locators.messageField.fill(message);
  }

  async submit(): Promise<void> {
    await this.locators.page.waitForLoadState('domcontentloaded');
    await this.locators.submitButton.click();
  }

  async isLoadingImageVisible(): Promise<boolean> {
    await this.locators.page.waitForLoadState('domcontentloaded');
    await this.locators.ajaxImage.waitFor({ state: 'visible' });
    return await this.locators.ajaxImage.isVisible();
  }

  async getAjaxBoxMessage(): Promise<string> {
    await this.locators.page.waitForLoadState('domcontentloaded');
    const texts = await this.locators.ajaxBox.allTextContents();
    return texts[0]?.trim() || '';
  }
}
