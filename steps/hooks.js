const { Before, After, setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

setDefaultTimeout(30000);

class CustomWorld {
    async init(){
        this.browser = await chromium.launch({ headless: false});
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async close(){
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);

    Before(async function() {
        await this.init();
    })

    After(async function(){
        await this.browser.close();
    })