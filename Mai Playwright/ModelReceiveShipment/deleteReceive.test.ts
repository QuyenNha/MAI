//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveReceive } from './movereceive.test';

test('Receive_shipment_delete', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveReceive(page);

    //Delete receive shipment
    await page.click("//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]/tbody[1]/tr[1]/td[5]/button[1]");
    await page.waitForTimeout(2000);
});
