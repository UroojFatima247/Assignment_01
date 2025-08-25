import { test, expect } from '@playwright/test';
import { HomePageActions } from '../Pages/Home/homePage.actions';
import { HomePageLocators } from '../Pages/Home/homePage.locators';
import { JavaScriptAlertActions } from '../Pages/javaScriptAlerts/javaScriptAlerts.actions';

test.describe('Bootstrap Dual List Box Tests', () => {
  let scriptAlerts: JavaScriptAlertActions;

  test.beforeEach(async ({ page }) => {
        scriptAlerts = new JavaScriptAlertActions(page);
        await scriptAlerts.goToPage();
      });

  test('Alert Test 1: Handle standard alert box', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('I am an alert box!');
      await dialog.accept();
    });

    await scriptAlerts.clickAlertButton('JavaScript Alerts');
  });

  test('Alert Test 2: Handle confirm box with OK', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('Press a button!');
      await dialog.accept();
    });

    await scriptAlerts.clickAlertButton('Confirm box:');
    const resultText = await scriptAlerts.getConfirmAlertResult();
    expect(resultText).toContain('You pressed OK!');
  });

  test('Alert Test 3: Handle confirm box with Cancel', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      await dialog.dismiss();
    });

    await scriptAlerts.clickAlertButton('Confirm box:');
    const resultText = await scriptAlerts.getConfirmAlertResult();
    expect(resultText).toContain('You pressed Cancel!');
  });

  test('Alert Test 4: Handle prompt box input', async ({ page }) => {
    const inputText = 'Urooj Fatima';

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toBe('Please enter your name');
      await dialog.accept(inputText);
    });

    await scriptAlerts.clickAlertButton('Prompt box:');
    const resultText = await scriptAlerts.getPromptAlertResult();
    expect(resultText).toContain(`You have entered '${inputText}' !`);
  });
});
