import { test } from "@playwright/test";
import { checkBoxDemoActions } from "../pages/CheckboxDemo/checkBoxDemo.actions";

test.describe('Checkbox Demo Tests', () => {
  let checkboxDemo: checkBoxDemoActions;

  test.beforeEach(async ({ page }) => {
    checkboxDemo = new checkBoxDemoActions(page);
    await checkboxDemo.goToPage();
  });

  test('CheckBox Test 1: Single checkbox can be checked', async () => {
    await checkboxDemo.checkSingleCheckbox();
    await checkboxDemo.verifyCheckedText();
  });

  test('CheckBox Test 2: Disabled checkboxes are not interactive', async () => {
    await checkboxDemo.verifyDisabledCheckboxes();
  });

  test('CheckBox Test 3: Multiple checkboxes can be checked', async () => {
    await checkboxDemo.checkMultipleCheckboxes();
  });

  test('CheckBox Test 4: Check All button checks all checkboxes', async () => {
    await checkboxDemo.clickCheckAllButton();
    await checkboxDemo.verifyAllCheckboxesCheckedAfterClickingCheckAll();
  });
});
