//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test('Incoming_shipment_searchDateTimeSince', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveIncoming(page);

    //Date-Time Since
    await page.locator('#etaSince').type('25-08-2023T03:04'); //con thgian
    await page.waitForTimeout(1000);
});
