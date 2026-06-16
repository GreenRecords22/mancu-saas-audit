const { test, expect } = require('@playwright/test');

test('Full SaaS Audit Flow', async ({ page }) => {
  // 1. POS TEST
  await page.goto('https://pos.mancu.cloud/?p=devibana');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'pos_screen.png' });
  
  // 2. KITCHEN TEST
  await page.goto('https://kitchen.mancu.cloud/?p=devibana');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'kitchen_screen.png' });
  
  // 3. ADMIN TEST (Login wala)
  await page.goto('https://admin.mancu.cloud/?p=devibana');
  await page.fill('input[type="email"]', 'admin@devibana.com');
  await page.fill('input[type="password"]', 'admin@devibana.com');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'admin_dashboard.png' });
  
  // Final assertion: check if dashboard is visible
  await expect(page).toHaveURL(/.*dashboard/); 
});
