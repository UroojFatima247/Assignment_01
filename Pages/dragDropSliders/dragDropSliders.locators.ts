import { Page, Locator } from '@playwright/test';

export class DragDropLocators {
  readonly dragDropHeading: Locator;

  constructor(private page: Page) {
    this.dragDropHeading = page.locator('//h1[text()="Slider Demo"]');
  }

  sliderInputById(containerId: string): Locator {
    return this.page.locator(`//div[@id="${containerId}"]//input`);
  }

  outputValueById(outputId: string): Locator {
    return this.page.locator(`//output[@id="${outputId}"]`);
  }
}
