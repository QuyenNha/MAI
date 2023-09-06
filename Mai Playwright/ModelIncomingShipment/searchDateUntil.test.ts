//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test('Incoming_shipment_searchkey', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveIncoming(page);

    //Date-Tine Until
    await page.locator('#etaUntil').type('01-09-2023T03:04'); //con thgian
    await page.waitForTimeout(1000);
});
