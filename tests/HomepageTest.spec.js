const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests', () => {

  test('should load the login page and check title and URL', async ({ page }) => {
    // Go to the login page
    await page.goto('https://qa.rovermd.com:8443/RoverApp/#/login');

    // Get and print the page title
    const pageTitle = await page.title();
    console.log('Page Title is:', pageTitle);

    // Validate the page title
    await expect(page).toHaveTitle('RoverMD');

    // Validate the URL
    await expect(page).toHaveURL('https://qa.rovermd.com:8443/RoverApp/#/login');

    // Get and print the page URL
    const pageURL = page.url();
    console.log('Page URL is:', pageURL);
  });

});
