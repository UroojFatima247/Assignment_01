// Pages/JavaScriptAlerts/JavaScriptAlerts.actions.ts

import { Page } from '@playwright/test';
import { JavaScriptAlertLocators } from './javaScriptAlerts.locators';

export class JavaScriptAlertActions {
  private locators: JavaScriptAlertLocators;

  constructor(private page: Page) {
    this.locators = new JavaScriptAlertLocators(page);
  }

  async goToPage() {
    await this.page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  }

  // Check if heading is visible
  async isHeadingVisible(): Promise<boolean> {
    await this.page.waitForLoadState('domcontentloaded');
    await this.locators.heading.waitFor({ state: 'visible' });
    return this.locators.heading.isVisible();
  }

  // Click a specific alert button (by descriptive paragraph text)
  async clickAlertButton(paragraphText: string): Promise<void> {
    const button = this.locators.getAlertButton(paragraphText);
    await button.waitFor({ state: 'visible' });

    if (await button.isVisible() && await button.isEnabled()) {
      await button.click();
    } else {
      throw new Error(`Button with text "${paragraphText}" is not visible or enabled.`);
    }
  }

  // Get confirmation alert message result text
  async getConfirmAlertResult(): Promise<string> {
    await this.locators.confirmResult.waitFor({ state: 'visible' });
    return (await this.locators.confirmResult.textContent())?.trim() || '';
  }

  // Get prompt alert message result text
  async getPromptAlertResult(): Promise<string> {
    await this.locators.promptResult.waitFor({ state: 'visible' });
    return (await this.locators.promptResult.textContent())?.trim() || '';
  }
}
