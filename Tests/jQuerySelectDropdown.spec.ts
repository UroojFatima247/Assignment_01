import { test, expect } from '@playwright/test';

import { JQueryDropdownActions } from '../Pages/jQuerySelectDropdown/jQuerySelectDropdown.actions';

test.describe('Drag & Drop Sliders - Functional Tests', () => {
  let dropDown: JQueryDropdownActions;

  test.beforeEach(async ({ page }) => {
          dropDown = new JQueryDropdownActions(page);
          await dropDown.goToPage();
        });

  test('Dropdown Test 1: Select country with search', async () => {
    await dropDown.openCountryDropdown();
    await dropDown.searchAndSelectCountry('South Africa');
    const selected = await dropDown.getSelectedCountry();
    expect(selected?.trim()).toBe('South Africa');
  });

  test('Dropdown Test 2: Select multiple states with search', async () => {
    const states = ['Hawaii', 'Alaska'];
    await dropDown.searchAndSelectMultipleStates(states);
    const selectedStates = await dropDown.getSelectedMultipleStates();
    expect(selectedStates).toEqual(expect.arrayContaining(states));
  });

  test('Dropdown Test 3: Attempt selecting a disabled option', async () => {
    const wasSelectable = await dropDown.trySelectingDisabledOption('Guam');
    expect(wasSelectable).toBe(false);

    const selected = await dropDown.getDisabledSelectedValue();
    expect(selected?.trim()).not.toBe('Guam');
  });

  test('Dropdown Test 4: Select file option from dropdown', async () => {
    await dropDown.selectFileFromDropdown('Java');
    const selectedValue = await dropDown.getSelectedFileValue();
    expect(selectedValue).toBe('jquery');
  });
});
