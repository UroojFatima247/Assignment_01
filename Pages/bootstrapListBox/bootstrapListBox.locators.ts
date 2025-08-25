import { Page, Locator } from '@playwright/test';

export class BootstrapListBoxLocators {
  readonly heading: Locator;
  readonly leftSearch: Locator;
  readonly rightSearch: Locator;
  readonly leftItems: Locator;
  readonly rightItems: Locator;
  readonly moveRight: Locator;
  readonly moveLeft: Locator;

  constructor(public page: Page) {
    this.heading = page.locator('//h1[text()="Bootstrap Dual List Demo"]');
    this.leftSearch = page.locator('//div[@class="well text-right"]//input[@name="SearchDualList"]');
    this.rightSearch = page.locator('//div[@class="well"]//input[@name="SearchDualList"]');
    this.leftItems = page.locator('//div[@class="well text-right"]//ul/li');
    this.rightItems = page.locator('//div[@class="well"]//ul/li');
    this.moveRight = page.locator('button.move-right');
    this.moveLeft = page.locator('button.move-left');
  }
}
