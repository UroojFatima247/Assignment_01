import { Page } from '@playwright/test';
import { JQueryDropdownLocators } from './jQuerySelectDropdown.locators';

export class JQueryDropdownActions {
  private locators: JQueryDropdownLocators;

  constructor(private page: Page) {
    this.locators = new JQueryDropdownLocators(page);
  }

  async goToPage() {
    await this.page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
  }

  async isHeadingVisible(): Promise<boolean> {
    await this.locators.heading.waitFor({ state: 'visible' });
    return this.locators.heading.isVisible();
  }

  async openCountryDropdown() {
    await this.locators.countryDropdown.click();
  }

  async searchAndSelectCountry(name: string) {
    await this.locators.countrySearchInput.waitFor({ state: 'visible' });
    await this.locators.countrySearchInput.fill(name);
    const option = this.page.locator(`//ul[@class="select2-results__options"]/li[text()="${name}"]`);
    await option.click();
  }

  async getSelectedCountry(): Promise<string | null> {
    await this.locators.selectedCountry.waitFor({ state: 'visible' });
    return this.locators.selectedCountry.textContent();
  }

  async searchAndSelectMultipleStates(states: string[]): Promise<void> {
    for (const state of states) {
      await this.locators.multiSearchInput.waitFor({ state: 'visible' });
      await this.locators.multiSearchInput.click();
      await this.locators.multiSearchInput.fill(state);
      const option = this.page.locator(`//ul[@class="select2-results__options"]/li[text()="${state}"]`);
      await option.click();
    }
  }

  async getSelectedMultipleStates(): Promise<string[]> {
    const selected = this.page.locator('//span[@class="selection"]//li');
    await selected.first().waitFor({ state: 'visible' });
    const items = await selected.allTextContents();
    return items.map(text => text.replace('×', '').trim()).filter(Boolean);
  }

  async trySelectingDisabledOption(name: string): Promise<boolean> {
    await this.locators.disabledValueField.waitFor({ state: 'visible' });
    if (await this.locators.disabledValueField.isVisible() && await this.locators.disabledValueField.isEnabled()) {
      await this.locators.disabledValueField.click();
    }
    const disabledOption = this.page.locator(`//ul[@class="select2-results__options"]/li[@aria-disabled="true" and text()="${name}"]`);
    try {
      await disabledOption.click({ timeout: 500 });
      return true;
    } catch {
      return false;
    }
  }

  async getDisabledSelectedValue(): Promise<string | null> {
    return this.locators.disabledValueField.textContent();
  }

  async selectFileFromDropdown(label: string) {
    await this.locators.fileDropdown.waitFor({ state: 'visible' });
    await this.locators.fileDropdown.selectOption({ label });
  }

  async getSelectedFileValue(): Promise<string | null> {
    await this.locators.fileDropdown.waitFor({ state: 'visible' });
    return this.locators.fileDropdown.inputValue();
  }
}
