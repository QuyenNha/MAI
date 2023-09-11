//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test.describe('Receive_shipment_create', () => {
    //Create blank all
    test('Input_Blankall', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        (await page.locator("//a[@aria-label='Create']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator("//ul[@id='supplierId-listbox']//li[1]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[@title='Clear value']")).click();
        await page.waitForTimeout(3000);
        await page.locator('#estimatedTimeofDeparture').type('');
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(3000);
        expect(page.getByText('#estimatedTimeofDeparture'), "Create failed");
    });

    //Create blank businesspartner
    test('Input_BlankBusinesspPartner', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        (await page.locator("//a[@aria-label='Create']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator("//ul[@id='supplierId-listbox']//li[1]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[@title='Clear value']")).click();
        await page.waitForTimeout(3000);
        await page.locator('#estimatedTimeofDeparture').type('02-09-2023');
        await page.locator('#estimatedTimeofDeparture').press('Tab');
        await page.locator('#estimatedTimeofDeparture').type('03:04');
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(2000);
        const CreatedUnSuccess = await page.locator("//div[text()='The system failed, please try again later.']");
        await expect(CreatedUnSuccess).toBeVisible();
    });

    //Create blank estimatedTimeofDeparture
    test('Input_BlankestimatedTimeofDeparture', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        (await page.locator("//a[@aria-label='Create']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator("//ul[@id='supplierId-listbox']//li[1]")).click();
        await page.waitForTimeout(2000);
        await page.locator('#estimatedTimeofDeparture').type('');
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(3000);
        expect(page.getByText('#estimatedTimeofDeparture'), "Create failed");

    });

    //Create fill fields required
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
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Save']")).click();
        const CreatedSuccess = await page.locator("//div[text()='Element created']");
        await expect(CreatedSuccess).toBeVisible();
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
        (await page.locator("//button[text()='Save']")).click();
        const CreatedSuccess = await page.locator("//div[text()='Element created']");
        await expect(CreatedSuccess).toBeVisible();
    });

    //Create fill all fields but no line has click add
    test('Input_allfields_noline_clickadd', async ({ page }) => {

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
        expect(page.getByText('#estimatedTimeofDeparture'), "Create failed");
        const CreatedUnSuccess = await page.locator("//div[@role='dialog']");
        await expect(CreatedUnSuccess).toBeVisible();
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
        const CreatedSuccess = await page.locator("//div[text()='Element created']");
        await expect(CreatedSuccess).toBeVisible();
    });
});
