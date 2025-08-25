import { test, expect } from '@playwright/test';
import { HomePageLocators } from '../Pages/Home/homePage.locators';
import { HomePageActions } from '../Pages/Home/homePage.actions';
import { DragDropActions } from '../Pages/dragDropSliders/dragDropSliders.actions';

test.describe('Drag & Drop Sliders', () => {
  let dragDrop: DragDropActions;

  test.beforeEach(async ({ page }) => {
      dragDrop = new DragDropActions(page);
      await dragDrop.goToPage();
    });


  test('Slider 1: Set value to 50 via keyboard', async () => {
    await dragDrop.setSliderByKeyboard('slider1', 'range', 50);
    expect(await dragDrop.getOutputValue('range')).toBe(50);
  });

  test('Slider 2: Set value to 95 via keyboard', async () => {
    await dragDrop.setSliderByKeyboard('slider2', 'rangePrimary', 95);
    expect(await dragDrop.getOutputValue('rangePrimary')).toBe(95);
  });

  test('Slider 3: Set value to 30 via keyboard', async () => {
    await dragDrop.setSliderByKeyboard('slider3', 'rangeSuccess', 30);
    expect(await dragDrop.getOutputValue('rangeSuccess')).toBe(30);
  });
});
