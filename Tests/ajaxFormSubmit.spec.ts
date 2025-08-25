import { test, expect } from '@playwright/test';
import { HomePageLocators } from '../Pages/Home/homePage.locators';
import { HomePageActions } from '../Pages/Home/homePage.actions';
import { AjaxFormSubmitActions } from '../Pages/ajaxFormSubmit/ajaxFormSubmit.actions';

test('Ajax Test 1: Enter a message and verify output', async ({ page }) => {
  const homeLocators = new HomePageLocators(page);
  const homeActions = new HomePageActions(homeLocators);

  await homeActions.openHomePage();
  await homeActions.clickLinkByText('Ajax Form Submit');

  const ajaxActions = new AjaxFormSubmitActions(page);

  expect(await ajaxActions.verifyHeadingVisible()).toBe(true);

  await ajaxActions.fillName('Urooj Fatima');
  await ajaxActions.fillMessage('Testing Ajax Form Submit...');
  await ajaxActions.submit();

  const message = await ajaxActions.getAjaxBoxMessage();
  expect(message).toBe('Ajax Request is Processing!');

  expect(await ajaxActions.isLoadingImageVisible()).toBe(true);
});
