const { test, expect } = require('@playwright/test');

test.describe('Locators Tests', () => {
  test('should login with valid credentials', async ({ page }) => {
    await page.goto('https://qa.rovermd.com:8443/RoverApp/#/login');
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Fill username
    await page.fill('input[type="text"]', 'awais605'); 

    // Fill password
    await page.fill('input[type="password"]', 'Lio@12345');

    // Click login button
    await page.click('button:has-text("Login")'); 

    // Assert successful login (example: check for dashboard URL)
    await expect(page).toHaveURL('https://qa.rovermd.com:8443/RoverApp/#/rovermd/dashboard');

    // Locate all anchor links
  const links = page.locator('a');

  // Print each link text and href
  const count = await links.count();
  console.log(`Found ${count} links.`);

  for (let i = 0; i < count; i++) {
    const text = await links.nth(i).innerText();
    const href = await links.nth(i).getAttribute('href');
    console.log(`Link ${i + 1}: Text="${text}", Href="${href}"`);
  }

  // ✅ Correct assertion
  expect(count).toBeGreaterThan(0);



  });
});
