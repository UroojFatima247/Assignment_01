import { Page, expect } from "@playwright/test";
import { checkBoxDemoLocators } from "./checkBoxDemo.locators";

export class checkBoxDemoActions {
  verifyHeading(): any {
    throw new Error('Method not implemented.');
  }
  private locators: checkBoxDemoLocators;

  constructor(private page: Page) {
    this.locators = new checkBoxDemoLocators(page);
  }

  async goToPage() {
    await this.page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
  }

  async checkSingleCheckbox() {
    await this.locators.singleCheckbox.waitFor({ state: 'visible' });
    await this.locators.singleCheckbox.check();
    await expect(this.locators.singleCheckbox).toBeChecked();
  }

  async verifyCheckedText() {
    await expect(this.locators.checkedText).toBeVisible();
  }

    // ✅ Verify all disabled checkboxes under "Disabled Checkbox Demo" section
  async verifyDisabledCheckboxes() {
  const count = await this.locators.disableCheckbox.count();
  for (let i = 0; i < count; i++) {
    const item = this.locators.disableCheckbox.nth(i);
    const isDisabled = await item.isDisabled();

    if (!isDisabled) {
      await item.click();
    }
  }
}

  async checkMultipleCheckboxes() {
    const count = await this.locators.multipleCheckbox.count();
    for (let i = 0; i < count; i++) {
      const checkbox = this.locators.multipleCheckbox.nth(i);
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }

  async clickCheckAllButton() {
    await this.locators.checkAllButton.click();
  }

  async verifyAllCheckboxesCheckedAfterClickingCheckAll() {
    const count = await this.locators.multipleCheckbox.count();
    for (let i = 0; i < count; i++) {
      await expect(this.locators.multipleCheckbox.nth(i)).toBeChecked();
    }
  }
}
