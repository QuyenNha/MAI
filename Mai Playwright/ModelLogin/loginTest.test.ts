import { test, expect, Page } from '@playwright/test';

export async function loginSuccessTest(page: Page): Promise<void> {
    await page.goto('https://dev.mai-ade.com/login');
    await page.waitForSelector('#username');
    await page.locator('#username').type('root');
    await page.locator('#password').type('Mai@2022');
    await page.locator('text=SIGN IN').first().click();
};

test('Login Success', async ({ page }) => {
    await loginSuccessTest(page);
    await expect(page).toHaveURL('https://dev.mai-ade.com/');
});
