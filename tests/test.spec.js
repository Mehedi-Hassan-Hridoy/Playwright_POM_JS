import { test, expect } from "@playwright/test";
import BasePage from "../pages/basePage";
import Login from "../pages/login";
import Home from "../pages/home";
import ViewAddr from "../pages/viewAddresses";
import Register from "../pages/register";
import { delay } from "../utils/helpers";
import { faker } from "@faker-js/faker";

let page;
test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  const p = new BasePage(page);
  await p.gotoStore();
  await p.enterPassword("bs23");
});

test.describe("Group1_Reg", () => {
  test("Registration", async ({}) => {
    const p1 = new BasePage(page);
    // await p1.gotoStore();
    // await p1.enterPassword('bs23');
    await p1.goToRegistration();
    //await p1.enterFirstName('Mr');
    const reg = new Register(page);
    await delay(5);
    await reg.enterFirstName("Mr");
    await reg.enterLastName("testabcd1");
    await reg.enterEmail(faker.internet.email());// dynamicly data generate.
    await reg.enterPassword("testabcd1234");
    await reg.clickCreate();
    await reg.clickProfileIcon();
    await reg.clickLogout();
  });
});

test.describe("Functional Test", () => {
  //let page;
  test.beforeEach(async ({}) => {
    //page = await browser.newPage()
    const p2 = new BasePage(page);
    // await p2.gotoStore()
    // await p2.enterPassword('bs23');
    await p2.goToLogin();
    const p3 = new Login(page);
    await p3.enterEmail("asdfghjkl1234@gmail.com");
    await p3.enterPassword("12345");
  });

  test("Home test", async ({}) => {
    const h = new Home(page);
    await h.clickHome();
  });
  test("Add to cart", async ({}) => {
    const v = new ViewAddr(page);
    await v.clickViewAddr();
    //await delay(5);
  });
  test.afterEach(async ({}) => {
    const logout = new BasePage(page);
    await delay(3);
    await logout.logout();
  });
});
