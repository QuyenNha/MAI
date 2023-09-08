//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveReceive } from './moveReceive.test';

test('Receive_shipment_print', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveReceive(page);

    //Print receive shipment
    const buttonSelector = "//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]/tbody[1]/tr[1]/td[5]/button[2]";
    await page.waitForSelector(buttonSelector);
    const isEnabled = await page.evaluate((selector) => {
        const button = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        return !button.disabled;
    }, buttonSelector);

    expect(isEnabled).toBeTruthy();
    await page.waitForTimeout(3000);
});
