//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveincoming.test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test('Incoming_shipment_searchkey', async ({ page }) => {

    //Move to: Incoming Shipment
    await moveIncoming(page);

    //Keyword
    await page.locator('#query').type('aa');
    await page.waitForTimeout(1000);
});
