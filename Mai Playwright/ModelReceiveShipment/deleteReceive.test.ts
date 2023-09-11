//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveReceive } from './moveReceive.test';

test('Receive_shipment_delete', async ({ page }) => {
    //Move to: Incoming Shipment
    await moveReceive(page);

    // Delete receive shipment
    await page.click("//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]/tbody[1]/tr[1]/td[5]/button[1]");
    const deletedRowLocator = "//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]/tbody[1]/tr[1]";
    await page.waitForSelector(deletedRowLocator, { state: 'hidden' });
    const deletedRow = await page.locator(deletedRowLocator);
    await expect(deletedRow).not.toBeVisible();
});





