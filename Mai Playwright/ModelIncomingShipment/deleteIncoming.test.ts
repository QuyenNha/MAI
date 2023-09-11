//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test.describe('Incoming_shipment_delete', () => {
    //Delete imcoming shipment
    test('Incoming_shipment_delete', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        (await page.locator("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]/td[1]")).click();
        (await page.locator("//button[text()='Delete']")).click();
        const deleteSuccess = await page.locator("//div[text()='Element deleted']");
        await expect(deleteSuccess).toBeVisible();
    });

    //Undo Delete imcoming shipment
    test('Incoming_shipment_Undo', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        (await page.locator("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]/td[1]")).click();
        (await page.locator("//button[text()='Delete']")).click();
        await page.click("//button[text()='Undo']");
        const undoDeleteSuccess = await page.locator("(//tr[contains(@class,'MuiTableRow-root MuiTableRow-hover')])[1]");
        await expect(undoDeleteSuccess).toBeVisible();
    });
});
