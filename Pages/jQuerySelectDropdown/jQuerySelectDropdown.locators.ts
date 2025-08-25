import { Page, Locator } from '@playwright/test';

export class JQueryDropdownLocators {
  heading: Locator;
  countryDropdown: Locator;
  countrySearchInput: Locator;
  selectedCountry: Locator;
  multiSearchInput: Locator;
  disabledValueField: Locator;
  fileDropdown: Locator;

  constructor(private page: Page) {
    this.heading = page.locator('//h1[text()="Jquery Dropdown Search Demo"]');
    this.countryDropdown = page.locator('//span[contains(@class,"select2-selection") and @aria-labelledby="select2-country-container"]');
    this.countrySearchInput = page.locator('//span[@class="select2-dropdown select2-dropdown--below"]//input[@type="search"]');
    this.selectedCountry = page.locator('//span[@id="select2-country-container"]');
    this.multiSearchInput = page.locator('//span[@class="selection"]//input[@type="search"]');
    this.disabledValueField = page.locator('//span[@class="selection"]//span[@class="select2-selection__rendered" and @title="Puerto Rico"]');
    this.fileDropdown = page.locator('//select[@id="files"]');
  }
}
