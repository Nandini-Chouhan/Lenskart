const puppeteer = require('puppeteer');
let browser;
async function openBrowser(url){
   browser = await puppeteer.launch({
        headless: false,
        defaultViewport:null,
        args: ['--start-maximized',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process'
      ]})
    const [page]  = await browser.pages();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);

    return page;
}
async function closeBrowser(){
    await browser.close();
}

module.exports = {
    openBrowser,
    closeBrowser
}
