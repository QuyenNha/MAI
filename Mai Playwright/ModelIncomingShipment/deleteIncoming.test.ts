//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test('Incoming_shipment_searchkey', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveIncoming(page);

    //Delete imcoming shipment
    (await page.locator("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]/td[1]")).click();
    (await page.locator("//button[text()='Delete']")).click();
    await page.waitForTimeout(3000);
});
