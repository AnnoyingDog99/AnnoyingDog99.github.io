import { expect, test } from '@playwright/test';

//Should be correct
test('Title of home should be Home', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle("Home");
	await expect(page).not.toHaveTitle("home");
	await expect(page).not.toHaveTitle("Projects");
});

test('Title of projects should be Projects', async ({ page }) => {
	await page.goto('/projects');
	await expect(page).toHaveTitle("Projects");
	await expect(page).not.toHaveTitle("projects");
	await expect(page).not.toHaveTitle("Home");
});

test('Title of resume should be Resume', async ({ page }) => {
	await page.goto('/resume');
	await expect(page).toHaveTitle("Resume");
	await expect(page).not.toHaveTitle("resume");
	await expect(page).not.toHaveTitle("Contact");
});

test('Title of contact should be Contact', async ({ page }) => {
	await page.goto('/contact');
	await expect(page).toHaveTitle("Contact");
	await expect(page).not.toHaveTitle("contact");
	await expect(page).not.toHaveTitle("Resume");
});