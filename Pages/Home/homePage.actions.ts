// Pages/HomePage/homePage.actions.ts

import { HomePageLocators } from './homePage.locators';

export class HomePageActions {
  private locators: HomePageLocators;

  constructor(locators: HomePageLocators) {
    this.locators = locators;
  }

  async openHomePage(): Promise<void> {
    await this.locators.page.goto('https://www.lambdatest.com/selenium-playground/', {
      waitUntil: 'domcontentloaded',
    });
  }

  async clickLinkByText(text: string): Promise<void> {
    const link = this.locators.menuLink(text);
    await link.waitFor({ state: 'visible' });

    if (await link.isVisible() && await link.isEnabled()) {
      await link.click();
    } else {
      throw new Error(`Link with text "${text}" is not clickable.`);
    }
  }
}
