import { test, expect, Page } from '@playwright/test';
import { loginSuccessTest } from '../ModelLogin/loginTest.test';

export async function moveIncoming(page: Page): Promise<void> {
    await loginSuccessTest(page);
    await page.waitForSelector("//p[contains(text(),'Stock')]");
    await page.locator('text=Stock').click();
    await page.locator('text=Incoming Shipments').click();
}

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test('Move Incoming Shipment', async ({ page }) => {
    await moveIncoming(page);
});
