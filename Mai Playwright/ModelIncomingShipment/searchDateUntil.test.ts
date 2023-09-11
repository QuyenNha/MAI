//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test('Incoming_shipment_searchDateTimeUntil', async ({ page }) => {
    //Move to: Incoming Shipment
    await moveIncoming(page);

    //Date-Time Until
    await page.locator('#etaUntil').type('01-09-2023');
    await page.locator('#etaUntil').press('Tab');
    await page.locator('#etaUntil').type('03:04');
    const showResult = await page.locator("//div[contains(@class,'MuiToolbar-root MuiToolbar-gutters')]/following-sibling::div[1]");
    await expect(showResult).toBeVisible();
});
