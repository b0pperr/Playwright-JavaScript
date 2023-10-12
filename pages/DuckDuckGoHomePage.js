exports.DuckDuckGoHomePage = class DuckDuckGoHomePage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.duckDuckGoLogo = page.locator("//*[@id='__next']/main/article/div[1]/div[1]/section[1]/img");
		this.searchInputBox = page.locator("#searchbox_input");
		this.searchSubmitButton = page.getByLabel("Search", { exact: true });
	}

	async goto() {
		await this.page.goto("https://www.duckduckgo.com");
	}
};
