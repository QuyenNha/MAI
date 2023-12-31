import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from '../ModelIncomingShipment/moveIncoming.test';

export async function moveReceive(page: Page): Promise<void> {
    await moveIncoming(page);
    await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
    (await page.locator("//a[@aria-label='Receive Shipment']")).click();
}

test('Move moveReceive Shipment', async ({ page }) => {
    await moveReceive(page);
    await page.waitForTimeout(2000);
    const expectedURLPattern = /\/stock\/incoming-shipments\/.*\/receive/;
    await expect(page.url()).toMatch(expectedURLPattern);
});
