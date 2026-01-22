import { expect } from "@playwright/test";
import { loginSelectors } from "../selectors/login.selectors";

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameField = page.locator(loginSelectors.usernameField);
        this.passwordField = page.locator(loginSelectors.passwordField);
        this.loginButton = page.locator(loginSelectors.loginButton);
        this.dashboardTitle = page.locator(loginSelectors.dashboardTitle);
    }

    async open(siteUrl) {
        await this.page.goto(siteUrl);
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async verifyDashboard() {
        await expect(this.page).toHaveURL(/dashboard.*\.html/);
        await expect(this.dashboardTitle).toContainText(/Dashboard/i);
    }

}
