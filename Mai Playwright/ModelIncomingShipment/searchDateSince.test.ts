//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test('Incoming_shipment_searchDateTimeSince', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveIncoming(page);

    //Date-Time Since
    await page.locator('#etaSince').type('25-08-2023');
    await page.locator('#etaSince').press('Tab');
    await page.locator('#etaSince').type('03:04');
    const showResult = await page.locator("//div[contains(@class,'MuiToolbar-root MuiToolbar-gutters')]/following-sibling::div[1]");
    await expect(showResult).toBeVisible();
    await page.waitForTimeout(1000);
});
