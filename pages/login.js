import BasePage from "./basePage";

class Login extends BasePage {
  constructor(page) {
    super(page);
    this.emailField = page.locator("#CustomerEmail");
    this.passwordField = page.locator("#CustomerPassword");
    this.loginButton = page.locator("//button[normalize-space()='Login']");
  }
  async enterEmail(email) {
    await this.emailField.fill(email);
  }
  async enterPassword(password) {
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
export default Login;
