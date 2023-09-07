//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test.describe('Receive_shipment_create', () => {
    //Create blank all
    test('Input_Blankall', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        (await page.locator("//a[@aria-label='Create']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator("//ul[@id='supplierId-listbox']//li[1]")).click();
        (await page.locator("//button[@title='Clear value']")).click();
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(1000);
    });

    //Create blank businesspartner
    test('Input_BlankBusinesspPartner', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        (await page.locator("//a[@aria-label='Create']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator("//ul[@id='supplierId-listbox']//li[1]")).click();
        await page.waitForTimeout(3000);
        await page.locator('#estimatedTimeofDeparture').type('02-09-2023');
        await page.locator('#estimatedTimeofDeparture').press('Tab');
        await page.locator('#estimatedTimeofDeparture').type('03:04');
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(3000);
    });

    //Create fill fields kill enter
    test('Input_fieldskill', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        (await page.locator("//a[@aria-label='Create']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator("//ul[@id='supplierId-listbox']//li[1]")).click();
        await page.waitForTimeout(3000);
        await page.locator('#estimatedTimeofDeparture').type('02-09-2023');
        await page.locator('#estimatedTimeofDeparture').press('Tab');
        await page.locator('#estimatedTimeofDeparture').type('03:04');
        await page.waitForTimeout(3000);
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(3000);
    });

    //Create fill all fields but no line
    test('Input_allfields_noline', async ({ page }) => {

        //Move to: Incoming Shipment
        await moveIncoming(page);
        (await page.locator("//a[@aria-label='Create']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator("//ul[@id='supplierId-listbox']//li[1]")).click();
        await page.waitForTimeout(3000);
        await page.locator('#estimatedTimeofArrival').type('02-09-2023');
        await page.locator('#estimatedTimeofArrival').press('Tab');
        await page.locator('#estimatedTimeofArrival').type('03:04');
        await page.locator('#estimatedTimeofDeparture').type('02-09-2023');
        await page.locator('#estimatedTimeofDeparture').press('Tab');
        await page.locator('#estimatedTimeofDeparture').type('03:04');
        await page.locator('#actualTimeofDeparture').type('02-09-2023');
        await page.locator('#actualTimeofDeparture').press('Tab');
        await page.locator('#actualTimeofDeparture').type('03:04');
        (await page.locator('#transportType')).click();
        (await page.locator("(//ul[@role='listbox']//li)[2]")).click();
        await page.waitForTimeout(3000);
        await page.locator('#shipmentName').type('Ship');
        await page.locator('#comment').type('Test');
        (await page.locator("//button[@aria-label='Add']")).click();
        await page.waitForTimeout(3000);
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(3000);
    });

    //Create fill all fields
    test('Input_allfields', async ({ page }) => {

        //Move to: Incoming Shipment
        await moveIncoming(page);
        (await page.locator("//a[@aria-label='Create']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator("//ul[@id='supplierId-listbox']//li[1]")).click();
        await page.waitForTimeout(3000);
        await page.locator('#estimatedTimeofArrival').type('02-09-2023');
        await page.locator('#estimatedTimeofArrival').press('Tab');
        await page.locator('#estimatedTimeofArrival').type('03:04');
        await page.locator('#estimatedTimeofDeparture').type('02-09-2023');
        await page.locator('#estimatedTimeofDeparture').press('Tab');
        await page.locator('#estimatedTimeofDeparture').type('03:04');
        await page.locator('#actualTimeofDeparture').type('02-09-2023');
        await page.locator('#actualTimeofDeparture').press('Tab');
        await page.locator('#actualTimeofDeparture').type('03:04');
        (await page.locator('#transportType')).click();
        (await page.locator("(//ul[@role='listbox']//li)[2]")).click();
        await page.waitForTimeout(3000);
        await page.locator('#shipmentName').type('Ship');
        await page.locator('#comment').type('Test');
        (await page.locator("//button[@aria-label='Add']")).click();
        (await page.locator("//input[@id='placehold']")).click();
        (await page.locator("(//option[@class='choice'])[1]")).click();
        await page.waitForTimeout(3000);
        await page.locator("//input[@inputmode='numeric']").type('10');
        await page.locator("//input[@id='lines.0.comment']").type('Test');
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(3000);
    });
});
