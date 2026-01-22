import { test } from "@playwright/test";
import * as dotenv from "dotenv";
import { LoginPage } from "../pages/LoginPage.js";
import { loginData } from "../data/loginData.js";

dotenv.config();

const siteUrl = process.env.SITE_B_URL;

test.describe("Login Tests", () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open(siteUrl);
    page.loginPage = loginPage; 
  });

  test("Valid login", async ({ page }) => {
    const loginPage = page.loginPage;

    await loginPage.login(loginData.username, loginData.password);
    await loginPage.verifyDashboard();
  });

});
