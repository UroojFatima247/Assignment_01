import { Page } from '@playwright/test';
import { BootstrapListBoxLocators } from './bootstrapListBox.locators';

export class BootstrapListBoxActions {
  private locators: BootstrapListBoxLocators;

  constructor(page: Page) {
    this.locators = new BootstrapListBoxLocators(page);
  }

  async verifyHeading(): Promise<boolean> {
    await this.locators.heading.waitFor({ state: 'visible' });
    return await this.locators.heading.isVisible();
  }

  async searchLeft(text: string) {
    await this.locators.leftSearch.fill(text);
  }

  async searchRight(text: string) {
    await this.locators.rightSearch.fill(text);
  }

  async selectLeftItemByName(name: string) {
    const item = this.locators.leftItems.filter({ hasText: name }).first();
    await item.waitFor({ state: 'visible' });
    await item.click();
  }

  async selectRightItemByName(name: string) {
    const item = this.locators.rightItems.filter({ hasText: name }).first();
    await item.waitFor({ state: 'visible' });
    await item.click();
  }

  async moveToRight() {
    await this.locators.moveRight.waitFor({ state: 'visible' });
    await this.locators.moveRight.click();
  }

  async moveToLeft() {
    await this.locators.moveLeft.waitFor({ state: 'visible' });
    await this.locators.moveLeft.click();
  }

  async getLeftItems(): Promise<string[]> {
    return (await this.locators.leftItems.allTextContents()).map(t => t.trim());
  }

  async getRightItems(): Promise<string[]> {
    return (await this.locators.rightItems.allTextContents()).map(t => t.trim());
  }
}