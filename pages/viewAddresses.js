class ViewAddr {
  constructor(page) {
    this.page = page;
    this.viewAddrBtn = page.locator(
      "//a[normalize-space()='View addresses (2)']"
    );
  }
  async clickViewAddr() {
    await this.viewAddrBtn.click();
  }
}
export default ViewAddr;
