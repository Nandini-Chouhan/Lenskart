const obj_locator = require('../object_locator/loginpage.js');

async function clickOnSignInButton(page){
    await page.waitForXPath(obj_locator.signInButton);
    const element = await page.$x(obj_locator.signInButton);
    await element[0].click();
}

async function typeEmailAddress(page,email){   
    await page.waitForXPath(obj_locator.emailInput);
    const element = await page.$x(obj_locator.emailInput)
    await element[0].type(email,{delay : 100});

}

async function clickOnProceedButton(page){
    await page.waitForXPath(obj_locator.proceedButton);
    const element = await page.$x(obj_locator.proceedButton);
    await element[0].click();
}

async function typePassword(page,password){
    await page.waitForXPath(obj_locator.passwordInput);
    const element = await page.$x(obj_locator.passwordInput)
    await element[0].type(password,{delay : 100});
}

module.exports = {
    clickOnSignInButton,
    typeEmailAddress,
    clickOnProceedButton,
    typePassword

}