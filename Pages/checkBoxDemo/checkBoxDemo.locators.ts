import { Page, Locator } from "@playwright/test";

export class checkBoxDemoLocators {
  readonly singleCheckbox: Locator;
  readonly disableCheckbox: Locator;
  readonly multipleCheckbox: Locator;
  readonly checkAllButton: Locator;
  readonly checkedText: Locator;

  constructor(private page: Page) {
    this.singleCheckbox = page.locator('//h2[text()="Single Checkbox Demo"]/following-sibling::label/input');
    this.disableCheckbox = page.locator('//h2[text()="Disabled Checkbox Demo"]/following-sibling::div//label/input');
    this.multipleCheckbox = page.locator('//h2[text()="Multiple Checkbox Demo"]/following-sibling::div//label/input');
    this.checkAllButton = page.locator('//button[@class="mt-20 py-10 px-30 bg-[#00c5cd] text-white rounded-md cursor-pointer"]');
    this.checkedText = page.locator('//p[text()="Checked!"]');
  }
}
