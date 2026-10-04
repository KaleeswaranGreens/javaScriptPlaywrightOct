// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 await page.goto("https://www.omrbranch.com")
 await expect(page).toHaveTitle("OMR Branch");
});


