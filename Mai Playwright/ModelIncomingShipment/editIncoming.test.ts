//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveIncoming } from './moveIncoming.test';

test.describe('Incoming_shipment_create', () => {
    //Edit business partner
    test('Incoming_shipment_edit_businesspartner', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        await page.waitForSelector("//input[@role='combobox']")
        await page.locator('#supplierId').click();
        (await page.locator("//ul[@id='supplierId-listbox']//li[1]")).click();
        (await page.locator("//button[text()='Save']")).click();
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });

    //Edit estimatedTimeofArrival
    test('Incoming_shipment_edit_estimatedTimeofArrival', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        await page.locator('#estimatedTimeofArrival').type('02-09-2023');
        await page.locator('#estimatedTimeofArrival').press('Tab');
        await page.locator('#estimatedTimeofArrival').type('03:04');
        (await page.locator("//button[text()='Save']")).click();
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });

    //Edit estimatedTimeofDeparture
    test('Incoming_shipment_edit_estimatedTimeofDeparture', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        await page.locator('#estimatedTimeofDeparture').type('02-09-2023');
        await page.locator('#estimatedTimeofDeparture').press('Tab');
        await page.locator('#estimatedTimeofDeparture').type('03:04');
        (await page.locator("//button[text()='Save']")).click();
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });

    //Edit actualTimeofDeparture
    test('Incoming_shipment_edit_actualTimeofDeparture', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        await page.locator('#actualTimeofDeparture').type('02-09-2023');
        await page.locator('#actualTimeofDeparture').press('Tab');
        await page.locator('#actualTimeofDeparture').type('03:04');
        (await page.locator("//button[text()='Save']")).click();
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });

    //Edit transportType
    test('Incoming_shipment_edit_transportType', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        (await page.locator('#transportType')).click();
        (await page.locator("(//ul[@role='listbox']//li)[3]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Save']")).click();
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });

    //Edit shipmentName
    test('Incoming_shipment_edit_shipmentName', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        await page.locator('#shipmentName').press('Control+A');
        await page.locator('#shipmentName').press('Backspace');
        await page.locator('#shipmentName').type('Shipment');
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(2000);
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });

    //Edit comment
    test('Incoming_shipment_edit_comment', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        await page.locator('#comment').press('Control+A');
        await page.locator('#comment').press('Backspace');
        await page.locator('#comment').type('Test');
        (await page.locator("//button[text()='Save']")).click();
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });

    //Edit Add
    test('Incoming_shipment_edit_Add', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        await page.waitForTimeout(3000);
        (await page.locator("//button[@aria-label='Add']")).click();
        await page.waitForTimeout(3000);
        (await page.locator("//button[text()='Save']")).click();
        expect(page.getByText('#estimatedTimeofDeparture'), "Edit failed");
        const EditUnSuccess = await page.locator("//div[@role='dialog']");
        await expect(EditUnSuccess).toBeVisible();
        await page.waitForTimeout(2000);
    });

    //Edit placehold
    test('Incoming_shipment_edit_placehold', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        (await page.locator("//input[@id='placehold']")).click();
        (await page.locator("(//option[@class='choice'])[2]")).click();
        await page.waitForTimeout(3000);
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(2000);
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });

    //Edit amount
    test('Incoming_shipment_edit_amount', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        (await page.locator("//input[@id='placehold']")).click();
        (await page.locator("(//option[@class='choice'])[2]")).click();
        await page.waitForTimeout(3000);
        await page.locator("//input[@inputmode='numeric']").type('20');
        (await page.locator("//button[text()='Save']")).click();
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });


    //Edit linescomment
    test('Incoming_shipment_edit_linescomment', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        await page.locator("//input[@id='lines.0.comment']").press('Control+A');
        await page.locator("//input[@id='lines.0.comment']").press('Backspace');
        await page.locator("//input[@id='lines.0.comment']").type('Test');
        await page.waitForTimeout(1000);
        (await page.locator("//button[text()='Save']")).click();
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });

    //Edit upload file
    test('Incoming_shipment_edit_uploadfile', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        (await page.locator("//div[@data-testid='dropzone']")).click();
        await page.waitForTimeout(3000);
        await page.setInputFiles("//input[@type='file']", 'F:/Mai Playwright/File/Test.txt');
        await page.waitForLoadState();
        (await page.locator("//button[text()='Save']")).click();
        await page.waitForTimeout(3000);
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
        await page.waitForTimeout(3000);
    });

    //Edit delete file uploaded
    test('Incoming_shipment_edit_deletefile', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveIncoming(page);

        await page.click("//table[contains(@class,'MuiTable-root RaDatagrid-table')]/tbody[1]/tr[1]");
        (await page.locator("//a[@aria-label='Edit']")).click();
        (await page.locator("(//div[@class='file']//button)[2]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Delete']")).click();
        (await page.locator("//button[text()='Save']")).click();
        const EditSuccess = await page.locator("//div[text()='Element updated']");
        await expect(EditSuccess).toBeVisible();
    });
});
