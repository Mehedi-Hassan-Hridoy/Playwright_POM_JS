import { delay } from "../utils/helpers";

class BasePage {
  constructor(page) {
    this.page = page;
    this.storePassword = page.getByLabel("Enter store password");
    this.enterButton = page.getByRole("button", { name: "Enter" });
    this.regButton = page.getByRole("link", { name: "Register" });
    this.loginButton = page.locator(
      "//div[contains(@class,'header-auth')]//a[contains(@class,'header-auth-button')][normalize-space()='Login']"
    );
    this.profileIcon = page.getByRole("link", { name: "Invalid" });
    this.logoutButton = page.getByRole("link", { name: "Log out" });
    // this.password_textbox = page.getByLabel('Password')
    // this.login_button = page.getByRole('button', { name: 'Login' })
    //this.firstName = page.getByPlaceholder('First name');
  }

  async gotoStore() {
    await this.page.goto("https://commerce-23.myshopify.com/password");
  }

  async enterPassword(password) {
    await this.storePassword.fill(password);
    //await delay(5);
    await this.enterButton.click();
  }
  async goToRegistration() {
    await this.regButton.click();
  }
  async goToLogin() {
    await this.loginButton.click();
  }
  async logout() {
    await delay(3);
    await this.profileIcon.click();
    await this.logoutButton.click();
  }
  //  async enterFirstName(firstName){
  //     //await this.firstName.click();
  //     await delay(3);
  //     await this.firstName.fill(firstName);
  // }
  //      async delay(seconds) {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, seconds * 1000);
  //   });

  //   delayFunc

  // }
}

export default BasePage;
