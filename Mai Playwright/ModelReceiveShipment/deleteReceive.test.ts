//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveReceive } from './moveReceive.test';

test('Receive_shipment_delete', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveReceive(page);

    //Delete receive shipment
    await page.click("//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]/tbody[1]/tr[1]/td[5]/button[1]");
    const locator = page.locator("//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]/tbody[1]/tr[1]/td[5]/button[1]");
    await expect(locator).toBeEnabled();
    await page.waitForTimeout(2000);
});
