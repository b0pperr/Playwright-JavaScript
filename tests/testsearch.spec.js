const { test, expect } = require("@playwright/test");
const { DuckDuckGoHomePage } = require("../pages/DuckDuckGoHomePage");
const { PandaPage } = require("../pages/PanadaPage");

test("Site loads successfully", async ({ page }) => {
	const duckDuckGoHomePage = new DuckDuckGoHomePage(page);
	await duckDuckGoHomePage.goto();

	// Expect the page to contain the DuckDuckGo logo.
	await expect(duckDuckGoHomePage.duckDuckGoLogo).toBeVisible();
});

test("Perform search", async ({ page }) => {
	const duckDuckGoHomePage = new DuckDuckGoHomePage(page);
	const pandaPage = new PandaPage(page);

	await duckDuckGoHomePage.goto();

	// Fill our panda in search bar
	await duckDuckGoHomePage.searchInputBox.fill("panda");

	// Click search button
	await duckDuckGoHomePage.searchSubmitButton.click();

	await expect(pandaPage.pandaTextSearchResult).toBeVisible();
});
