exports.PandaPage = class PandaPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.pandaTextSearchResult = page.getByTestId("about").getByRole("link", { name: "Giant panda" });
	}
};
