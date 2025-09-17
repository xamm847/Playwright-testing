const { test, expect } = require('@playwright/test');

test.describe('Locators Tests', () => {
  test('should login with valid credentials', async ({ page }) => {
    await page.goto('https://qa.rovermd.com:8443/RoverApp/#/login');
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Fill username
    await page.fill('input[name="username"]', 'your-username');

    // Fill password
    await page.fill('input[name="password"]', 'your-password');

    // Click login button
    await page.click('button[type="submit"]');

    // Assert successful login (example: check for dashboard element)
    await expect(page).toHaveURL(/dashboard|home/i);
  });
});