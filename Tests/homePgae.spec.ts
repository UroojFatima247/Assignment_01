import { test } from '@playwright/test';
import { HomePageLocators } from '../Pages/Home/homePage.locators';
import { HomePageActions } from '../Pages/Home/homePage.actions';

test('User should navigate to Ajax Form Submit page from homepage', async ({ page }) => {
  const locators = new HomePageLocators(page);
  const actions = new HomePageActions(locators);

  await actions.openHomePage();
  await actions.clickLinkByText('Ajax Form Submit');
});
