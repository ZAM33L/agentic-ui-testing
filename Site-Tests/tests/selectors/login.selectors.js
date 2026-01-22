// Site B Selectors (based on ScanDOM scan)
// Inputs: { id: "user-name", type: "text" }, { id: "pass-word", type: "password" }
// Button: <button id="login-button" type="submit">Login</button>
export const loginSelectors = {
    usernameField: "//input[@id='user-name']",
    passwordField: "//input[@id='pass-word']",
    loginButton: "//button[@id='login-button']",
    dashboardTitle: "//h1[contains(text(), 'Dashboard')]"
};
