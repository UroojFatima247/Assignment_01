import { Page, expect, Locator } from '@playwright/test';
import { DragDropLocators } from './dragDropSliders.locators';

export class DragDropActions {
  private locators: DragDropLocators;

  constructor(private page: Page) {
    this.locators = new DragDropLocators(page);
  }

  async goToPage() {
    await this.page.goto('https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo');
  }

  async isHeadingVisible(): Promise<boolean> {
    await this.locators.dragDropHeading.waitFor({ state: 'visible' });
    return this.locators.dragDropHeading.isVisible();
  }

  async locateSlider(containerId: string): Promise<Locator> {
    const slider = this.locators.sliderInputById(containerId);
    await slider.waitFor({ state: 'visible' });
    return slider;
  }

  async getOutputValue(outputId: string): Promise<number> {
    const output = this.locators.outputValueById(outputId);
    await output.waitFor({ state: 'visible' });
    const text = await output.textContent();
    if (!text) throw new Error(`Output with id="${outputId}" has no text`);
    return Number(text.trim());
  }

  async setSliderByKeyboard(containerId: string, outputId: string, target: number): Promise<void> {
    const slider = await this.locateSlider(containerId);
    await slider.focus();

    let current = await slider.evaluate((el: HTMLInputElement) => Number(el.value));
    const stepAttr = await slider.getAttribute('step');
    const step = stepAttr ? Number(stepAttr) : 1;

    const key = target >= current ? 'ArrowRight' : 'ArrowLeft';

    while (current !== target) {
      await slider.press(key);
      await this.page.waitForTimeout(50);
      current = await slider.evaluate((el: HTMLInputElement) => Number(el.value));

      if ((key === 'ArrowRight' && current > target) ||
          (key === 'ArrowLeft' && current < target)) {
        break;
      }
    }

    const outputValue = await this.getOutputValue(outputId);
    expect(outputValue).toBe(target);
  }
}
