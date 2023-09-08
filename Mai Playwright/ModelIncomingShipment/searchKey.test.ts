//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test('Incoming_shipment_searchkey', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveIncoming(page);

    //Keyword
    await page.locator('#query').type('aa');
    const errorMessage = await page.locator("//div[contains(@class,'MuiToolbar-root MuiToolbar-gutters')]/following-sibling::div[1]");
    await expect(errorMessage).toBeVisible();
    await page.waitForTimeout(1000);
});
