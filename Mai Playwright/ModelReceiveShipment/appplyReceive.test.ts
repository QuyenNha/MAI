import { test, expect, Page } from '@playwright/test';
import { moveReceive } from './moveReceive.test';
//Apply
test('Apply', async ({ page }) => {
    //Move to: Incoming Shipment
    await moveReceive(page);

    (await page.locator("//button[text()='APPLY']")).click();
    (await page.locator("//button[text()='Confirm']")).click();
    const applySuccess = await page.locator("//div[text()='Apply successful']");
    await expect(applySuccess).toBeVisible();
});