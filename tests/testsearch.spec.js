// @ts-check
const { test, expect } = require("@playwright/test");

test("Site loads successfully", async ({ page }) => {
	await page.goto("https://www.duckduckgo.com");

	// Expect the page to contain the DuckDuckGo logo.
	await expect(page.locator("//*[@id='__next']/main/article/div[1]/div[1]/section[1]/img")).toBeVisible();
});

test("Perform search", async ({ page }) => {
	await page.goto("https://www.duckduckgo.com");

	// Fill our panda in search bar
	await page.locator("#searchbox_input").fill("panda");

	// Click search button
	await page.click("#searchbox_homepage > div > div > button");
});
