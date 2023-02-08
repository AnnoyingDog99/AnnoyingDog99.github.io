import { expect, test } from '@playwright/test';

test('test contact me button', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Contact me!' }).click();
	await expect(page).toHaveTitle('Contact');
	await expect(page).toHaveURL('/contact');
});
