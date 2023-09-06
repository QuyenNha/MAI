import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from '../ModelIncomingShipment/moveIncoming.test';

export async function moveReceive(page: Page): Promise<void> {
    await moveIncoming(page);
    await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
    (await page.locator("//a[@aria-label='Receive Shipment']")).click();
}

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test('Move moveReceive Shipment', async ({ page }) => {
    await moveReceive(page);
});
