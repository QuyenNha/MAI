//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveReceive } from './movereceive.test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test('Receive_shipment_print', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveReceive(page);

    //Print receive shipment
    await page.click("//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]/tbody[1]/tr[1]/td[5]/button[2]");

    await page.close();
    //await page.click('cr-button.cancel-button');
});
