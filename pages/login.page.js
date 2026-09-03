class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name:'Login'});
        this.invalidCredentialMessagae = page.locator('.oxd-alert-content-text');
        this.usernameRequiredMessage = page.locator('.oxd-input-field-error-message').first();
        this.passwordRequiredMessage = page.locator('.oxd-input-field-error-message').last();
    }

    async goto() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com");
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async fillUsername(username){
        await this.usernameInput.fill(username);
    }

    async fillPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };