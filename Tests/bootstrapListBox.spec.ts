import { test, expect } from '@playwright/test';
import { HomePageLocators } from '../Pages/Home/homePage.locators';
import { HomePageActions } from '../Pages/Home/homePage.actions';
import { BootstrapListBoxActions } from '../Pages/bootstrapListBox/bootstrapListBox.actions';

test.describe('Bootstrap Dual List Box Tests', () => {
  let listBox: BootstrapListBoxActions;

  test.beforeEach(async ({ page }) => {
    const homeLocators = new HomePageLocators(page);
    const homeActions = new HomePageActions(homeLocators);

    await homeActions.openHomePage();
    await homeActions.clickLinkByText('Bootstrap List Box');

    listBox = new BootstrapListBoxActions(page);
    expect(await listBox.verifyHeading()).toBe(true);
  });

  test('Move item to right and verify', async () => {
    const item = 'Danville'; 

    await listBox.selectLeftItemByName(item);
    await listBox.moveToRight();

    const rightItems = await listBox.getRightItems();
    expect(rightItems).toContain(item);
  });

  test('Move item to left and verify', async () => {
    const item = 'Milan'; 

    await listBox.selectRightItemByName(item);
    await listBox.moveToLeft();

    const leftItems = await listBox.getLeftItems();
    expect(leftItems).toContain(item);
  });
});
