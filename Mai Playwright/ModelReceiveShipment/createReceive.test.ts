//mai.spec.ts

import { test, expect, Page } from '@playwright/test';
import { moveReceive } from './moveReceive.test';

test.describe('Receive_shipment_create', () => {
    // Create receive input_blank_all
    test('Input_blank_all', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator("//button[text()='Add']")).click();
        const CreateUnSuccess = await page.locator("(//div[contains(@class,'MuiPaper-root MuiPaper-elevation')])[3]");
        await expect(CreateUnSuccess).toBeVisible();
    });

    //Create receive input_blank_Resources
    test('Input_blank_blank_Resources', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator("(//div[contains(@class,'MuiGrid-root MuiGrid-item')]//button)[1]")).click();
        await page.waitForTimeout(2000);
        await page.locator('#amount').press('Control+A');
        await page.locator('#amount').press('Backspace');
        await page.waitForTimeout(1000);
        await page.locator('#amount').type('1');
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        const CreateUnSuccess = await page.locator("//div[@class='MuiSnackbarContent-message css-1exqwzz-MuiSnackbarContent-message']");
        await expect(CreateUnSuccess).toBeVisible();
    });

    //Create receive input_blank_lotno
    test('Input_blank_blank_lotno', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#placehold')).click();
        (await page.locator("(//option[@class='choice'])[1]")).click();
        await page.waitForTimeout(3000);
        await page.locator('#amount').type('10');
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        const CreateUnSuccess = await page.locator("//div[@class='MuiSnackbarContent-message css-1exqwzz-MuiSnackbarContent-message']");
        await expect(CreateUnSuccess).toBeVisible();
    });

    //Create receive input_blank_amount
    test('Input_blank_amount', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#placehold')).click();
        (await page.locator("(//option[@class='choice'])[1]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("(//div[contains(@class,'MuiGrid-root MuiGrid-item')]//button)[1]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        const CreateUnSuccess = await page.locator("(//div[contains(@class,'MuiPaper-root MuiPaper-elevation')])[3]");
        await expect(CreateUnSuccess).toBeVisible();
        await page.waitForTimeout(3000);
    });

    // Create receive input lotno
    test('Input_lotno', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#placehold')).click();
        (await page.locator("(//option[@class='choice'])[1]")).click();
        await page.waitForTimeout(3000);
        const input = await page.$('#stockLotName');
        const value = '19X4KF6YSI';
        for (let i = 0; i < value.length; i++) {
            await input?.type(value[i], { delay: 100 });
        }
        await page.waitForTimeout(2000);
        await page.locator('#amount').type('12');
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(2000);
        const successMessage = await page.locator("//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]");
        await expect(successMessage).toBeVisible();
    });

    //Create receive render lotno
    test('Render lotno', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#placehold')).click();
        (await page.locator("(//option[@class='choice'])[2]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Render Lot No']")).click();
        await page.waitForTimeout(2000);
        await page.locator('#amount').type('10');
        (await page.locator("//button[text()='Add']")).click();
        await page.waitForTimeout(3000);
        const successMessage = await page.locator("//table[contains(@class,'MuiTable-root css-rqglhn-MuiTable-root')]");
        await expect(successMessage).toBeVisible();
    });

    //Create receive supplier entered
    test('Supplier entered', async ({ page }) => {
        //Move to: Incoming Shipment
        await moveReceive(page);

        (await page.locator('#placehold')).click();
        (await page.locator("(//option[@class='choice'])[2]")).click();
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Render Lot No']")).click();
        await page.waitForTimeout(2000);
        await page.locator('#amount').type('10');
        await page.waitForTimeout(2000);
        (await page.locator("//button[text()='Add']")).click();
        const successMessage = await page.locator("//div[text()='Supplier entered']");
        await expect(successMessage).toBeVisible();
    });
});