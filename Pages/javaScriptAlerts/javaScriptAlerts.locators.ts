// Pages/JavaScriptAlerts/JavaScriptAlerts.locators.ts

import { Page, Locator } from '@playwright/test';

export class JavaScriptAlertLocators {
  readonly heading: Locator;
  readonly confirmResult: Locator;
  readonly promptResult: Locator;

  constructor(private page: Page) {
    this.heading = page.locator('//h1[text()="Javascript Alert Box Demo"]');
    this.confirmResult = page.locator('#confirm-demo');
    this.promptResult = page.locator('#prompt-demo');
  }

  getAlertButton(descriptionText: string): Locator {
    return this.page.locator(`//p[text()="${descriptionText}"]/button[text()="Click Me"]`);
  }
}
