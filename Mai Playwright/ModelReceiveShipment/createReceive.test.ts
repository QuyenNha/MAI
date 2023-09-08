//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveReceive } from './movereceive.test';

test.describe('Receive_shipment_create', () => {
    // Create receive input_blank_all
    test('Input_blank_all', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(3000);
    });

    //Create receive input_blank_id
    test('Input_blank_blank_id', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#id')).click();
        (await page.locator("//ul[contains(@class,'MuiList-root MuiList-padding')]//li[1]")).click();
        (await page.locator("//button[text()='Render LotNo']")).click();
        await page.waitForTimeout(2000);
        await page.locator('#amount').press('Control+A');
        await page.locator('#amount').press('Backspace');
        await page.waitForTimeout(2000);
        await page.locator('#amount').type('10');
        await page.waitForTimeout(1000);
        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(3000);
    });

    //Create receive input_blank_lotno
    test('Input_blank_blank_lotno', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#id')).click();
        (await page.locator("(//li[contains(@class,'MuiMenuItem-root MuiMenuItem-gutters')]/following-sibling::li)[1]")).click();
        await page.waitForTimeout(2000);
        await page.locator('#amount').type('10');
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(3000);
    });

    //Create receive input_blank_amount
    test('Input_blank_amount', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#id')).click();
        (await page.locator("(//li[contains(@class,'MuiMenuItem-root MuiMenuItem-gutters')]/following-sibling::li)[2]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Render LotNo']")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(3000);
    });


    // Create receive input lotno
    test('Input_lotno', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#id')).click();
        await page.waitForTimeout(2000);
        (await page.locator("(//li[contains(@class,'MuiMenuItem-root MuiMenuItem-gutters')]/following-sibling::li)[4]")).click();
        await page.waitForTimeout(2000);
        await page.locator('#lotNo').type('19X4KF6YSI0G');
        await page.waitForTimeout(2000);
        await page.locator('#amount').type('10');
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(3000);
    });

    //Create receive render lotno
    test('Render lotno', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#id')).click();
        (await page.locator("(//li[contains(@class,'MuiMenuItem-root MuiMenuItem-gutters')]/following-sibling::li)[5]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Render LotNo']")).click();
        await page.waitForTimeout(2000);
        await page.locator('#amount').type('10');
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(3000);
    });
});