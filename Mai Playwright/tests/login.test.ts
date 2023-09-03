//mai.spec.ts

import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.mai-ade.com/login');
});

test.describe('Login', () => {

    test('Verify Login Error Message', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('roof');
        await page.locator('#password').type('Mai@2021');
        await page.click('button.MuiButton-root');
        // Sử dụng page.waitForSelector để chờ phần tử xuất hiện trước khi trích xuất thông tin
        const errorMessageElement = await page.waitForSelector(
            '.MuiSnackbarContent-message' // Lựa chọn dựa trên class của phần tử
        );
        const errorMessage = await errorMessageElement.textContent();
        const cleanedErrorMessage = errorMessage.trim();
        await page.waitForTimeout(1000); // 10000 milliseconds = 10 seconds
        console.log(cleanedErrorMessage); // In ra thông báo lỗi
    });

    test('Login Success', async ({ page }) => {
        await page.waitForSelector('#username')
        await page.locator('#username').type('root');
        await page.locator('#password').type('Mai@2022');
        await page.locator('text=SIGN IN').first().click();
    });

});