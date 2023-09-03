//mai.spec.ts

import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test.describe('Receive_shipment', () => {

    test('Receive_shipment_create_inputlotno', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('root');
        await page.locator('#password').type('Mai@2022');
        await page.locator('text=SIGN IN').first().click();

        //Move to: Incoming Shipment
        await page.waitForSelector("//p[contains(text(),'Stock')]");
        await page.locator('text=Stock').click();
        await page.locator('text=Incoming Shipments').click();

        // Create receive input lotno
        // await page.goto('https://dev.mai-ade.com/stock/incoming-shipments/19/show');
        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Receive Shipment']")).click();
        (await page.locator('#id')).click();
        (await page.locator("//li[text()='Raw materials of Edelrid']")).click();
        await page.waitForSelector('#lotNo')
        await page.locator('#lotNo').type('19X4KF6YSI0G');
        await page.waitForTimeout(3000);
        await page.locator('#amount').type('10');
        await page.waitForTimeout(3000);
        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(3000);
    });

    test('Receive_shipment_create_renderlotno', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('root');
        await page.locator('#password').type('Mai@2022');
        await page.locator('text=SIGN IN').first().click();

        //Move to: Incoming Shipment
        await page.waitForSelector("//p[contains(text(),'Stock')]");
        await page.locator('text=Stock').click();
        await page.locator('text=Incoming Shipments').click();

        //Create receive render lotno
        //await page.goto('https://dev.mai-ade.com/stock/incoming-shipments/19/show');
        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Receive Shipment']")).click();
        (await page.locator('#id')).click();
        (await page.locator("//li[text()='Raw materials of Liros']")).click();
        await page.waitForTimeout(3000);
        (await page.locator("//button[text()='Render LotNo']")).click();
        await page.waitForTimeout(2000);
        await page.locator('#amount').type('10');
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(3000);
    });

    test('Receive_shipment_delete/print', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('root');
        await page.locator('#password').type('Mai@2022');
        await page.locator('text=SIGN IN').first().click();

        //Move to: Incoming Shipment
        await page.waitForSelector("//p[contains(text(),'Stock')]");
        await page.locator('text=Stock').click();
        await page.locator('text=Incoming Shipments').click();

        //Move to: Receive shipment
        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Receive Shipment']")).click();

        //Delete receive shipment
        await page.click("//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]/tbody[1]/tr[1]/td[5]/button[1]");
        await page.waitForTimeout(2000);

        //Print receive shipment
        await page.click("//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]/tbody[1]/tr[1]/td[5]/button[2]");
    });

});