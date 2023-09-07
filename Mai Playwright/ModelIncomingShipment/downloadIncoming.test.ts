//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test.describe('Incoming_shipment_Download', () => {
    //Download list
    test('Download_list', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);
        await page.locator("//button[text()='Export']").click();
        await page.waitForTimeout(3000);
    });

    //Download file upload
    test('Download_file upload', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("(//div[@class='file']//button)[1]")).click();
        await page.waitForTimeout(3000);
    });
});