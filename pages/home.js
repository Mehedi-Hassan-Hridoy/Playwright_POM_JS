class Home {
  constructor(page) {
    this.page = page;
    this.homeBtn = page.locator(
      "//a[@class='nav-options-first-level-title'][normalize-space()='Home']"
    );
  }
  async clickHome() {
    await this.homeBtn.click();
    //await expect(page).toHaveTitle("Welcome to our store");
  }
}
export default Home;
