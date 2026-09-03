const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

Given('I open OrangeHRM login page',async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto();
});

When('I input username {string} and password {string}', async function (username, password) {
    await this.loginPage.login(username, password);
});

Then('I able to see the error message {string}', async function (message) {
    await expect(this.loginPage.invalidCredentialMessagae).toHaveText(message);
});

Then ('I Successfully login to Dashboard', async function () {
    await expect(this.page).toHaveURL(/dashboard/);
});

// Scenario: Login with Username Empty
When('I Leave the username Empty', async function (){
    await this.loginPage.fillUsername('');
});

When('I input password {string}', async function (password) {
    await this.loginPage.fillPassword(password);
});

When('I click Login Button', async function () {
    await this.loginPage.clickLogin();
});

Then('I able to see the username required message {string}', async function (message) {
    await expect(this.loginPage.usernameRequiredMessage).toHaveText(message);
});

// Scenario: Login with Password Empty
When('I input username {string}', async function (username) {
    await this.loginPage.fillUsername(username);
});

When('I Leave the password Empty', async function () {
    await this.loginPage.fillPassword('');
});

Then ('I able to see the password required message {string}', async function (message) {
    await expect(this.loginPage.passwordRequiredMessage).toHaveText(message);
});

// Scenario: Login with Both Username and Password Empty
When('I Leave the username and password Empty', async function () {
    await this.loginPage.fillUsername('');
    await this.loginPage.fillPassword('');
});

Then('I able to see the username dan password required message {string}', async function (message) {
    await expect(this.loginPage.usernameRequiredMessage).toHaveText(message);
    await expect(this.loginPage.passwordRequiredMessage).toHaveText(message);
});