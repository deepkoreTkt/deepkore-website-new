import { test, expect } from '@playwright/test';

test('signup form submission', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[type="email"]', 'test@example.com');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Thank you!')).toBeVisible();
});