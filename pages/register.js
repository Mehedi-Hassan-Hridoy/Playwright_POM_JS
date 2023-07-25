import { delay } from "../utils/helpers";
import BasePage from "./basePage";
class Register {
  constructor(page) {
    //super(page);
    this.page = page;
    this.firstName = page.getByPlaceholder("First name");
    this.lastName = page.getByPlaceholder("Last name");
    this.email = page.getByPlaceholder("Email", { exact: true });
    this.password = page.getByPlaceholder("Password");
    this.createButton = page.getByRole("button", { name: "Create" });
    this.profileIcon = page.getByRole("link", { name: "Mr" });
    this.logoutButton = page.getByRole("link", { name: "Log out" });
  }
  async enterFirstName(firstName) {
    //await this.firstName.click();
    //await delay(3);
    await this.firstName.fill(firstName);
  }
  async enterLastName(lastName) {
    await this.lastName.fill(lastName);
  }
  async enterEmail(email) {
    await this.email.fill(email);
  }
  async enterPassword(password) {
    await this.password.fill(password);
  }
  async clickCreate() {
    await this.createButton.click();
  }
  async clickProfileIcon() {
    await this.profileIcon.click();
  }
  async clickLogout() {
    await this.logoutButton.click();
  }
}
export default Register;

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.locator('html').click();
//   await page.goto('https://commerce-23.myshopify.com/password');
//   await page.getByLabel('Enter store password').click();
//   await page.getByLabel('Enter store password').fill('bs23');
//   await page.getByRole('button', { name: 'Enter' }).click();
//   await page.getByRole('link', { name: 'Register' }).click();
//   await page.getByPlaceholder('First name').click();
//   await page.getByPlaceholder('First name').fill('mr');
//   await page.getByPlaceholder('Last name').click();
//   await page.getByPlaceholder('Last name').fill('testa');
//   await page.getByPlaceholder('Email', { exact: true }).click();
//   await page.getByPlaceholder('Email', { exact: true }).fill('testa@gmail.com');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('testa1234');
//   await page.getByRole('button', { name: 'Create' }).click();
// });
