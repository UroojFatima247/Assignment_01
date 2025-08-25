import { Page, Locator } from '@playwright/test';

export class HomePageLocators {
  readonly page: Page;
  readonly menuLink: (text: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuLink = (text: string) =>
      page.locator(`//li/a[normalize-space()="${text}"]`);
  }
}
