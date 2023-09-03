//mai.spec.ts

import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test.describe('Incoming_shipment', () => {

    test('Incoming_shipment_searchkey', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('root');
        await page.locator('#password').type('Mai@2022');
        await page.locator('text=SIGN IN').first().click();

        //Move to: Incoming Shipment
        await page.waitForSelector("//p[contains(text(),'Stock')]");
        await page.locator('text=Stock').click();
        await page.locator('text=Incoming Shipments').click();

        //Keyword
        await page.locator('#query').type('aaa');
        await page.waitForTimeout(1000);
    });

    test('Incoming_shipment_searchdatetimesince', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('root');
        await page.locator('#password').type('Mai@2022');
        await page.locator('text=SIGN IN').first().click();

        //Move to: Incoming Shipment
        await page.waitForSelector("//p[contains(text(),'Stock')]");
        await page.locator('text=Stock').click();
        await page.locator('text=Incoming Shipments').click();

        //Date-Tine Since
        await page.locator('#etaSince').type('25-08-2023'); //con thgian
        await page.waitForTimeout(1000);
    });

    test('Incoming_shipment_searchdateuntil', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('root');
        await page.locator('#password').type('Mai@2022');
        await page.locator('text=SIGN IN').first().click();

        //Move to: Incoming Shipment
        await page.waitForSelector("//p[contains(text(),'Stock')]");
        await page.locator('text=Stock').click();
        await page.locator('text=Incoming Shipments').click();

        //Date-Tine Until
        await page.locator('#etaUntil').type('01-09-2023'); //con thgian
        await page.waitForTimeout(1000);
    });

    test('Incoming_shipment_create', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('root');
        await page.locator('#password').type('Mai@2022');
        await page.locator('text=SIGN IN').first().click();

        //Move to: Incoming Shipment
        await page.waitForSelector("//p[contains(text(),'Stock')]");
        await page.locator('text=Stock').click();
        await page.locator('text=Incoming Shipments').click();

        //Create incoming shipment
        (await page.locator("//a[@aria-label='Create']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator('text=John')).click();
        await page.waitForTimeout(3000);
        await page.locator('#estimatedTimeofDeparture').type('02-09-2023 03:10');
        await page.waitForTimeout(3000);
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(3000);
    });

    test('Incoming_shipment_delete', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('root');
        await page.locator('#password').type('Mai@2022');
        await page.locator('text=SIGN IN').first().click();

        //Move to: Incoming Shipment
        await page.waitForSelector("//p[contains(text(),'Stock')]");
        await page.locator('text=Stock').click();
        await page.locator('text=Incoming Shipments').click();

        //Delete imcoming shipment
        (await page.locator("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]/td[1]")).click();
        (await page.locator("//button[text()='Delete']")).click();
        await page.waitForTimeout(3000);
    });

});