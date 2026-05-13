import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test('should render the overview page', async ({ page }) => {
    await page.goto('/');
    
    // Check for title
    await expect(page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    
    // Check for stats cards
    await expect(page.getByText('Total Rewards')).toBeVisible();
    await expect(page.getByText('Active Bounties')).toBeVisible();
  });

  test('should navigate to bounties page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Bounties', exact: true }).click();
    await expect(page).toHaveURL('/bounties');
    await expect(page.getByRole('heading', { name: 'Bounties' })).toBeVisible();
  });
});
