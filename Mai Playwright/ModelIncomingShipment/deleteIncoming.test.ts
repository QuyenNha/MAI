//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test('Incoming_shipment_delete', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveIncoming(page);

    //Delete imcoming shipment
    (await page.locator("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]/td[1]")).click();
    (await page.locator("//button[text()='Delete']")).click();
    const successMessage = await page.locator("//div[text()='Element deleted']");
    await expect(successMessage).toBeVisible();
    await page.waitForTimeout(3000);
    //case tick checkbox, bỏ tick checkbox, bỏ đồng loạt, undo delete
});
