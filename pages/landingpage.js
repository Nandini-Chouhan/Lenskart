const obj_locator = require('../object_locator/landingpage.js');

async function clickOnSignInSignUp(page){
    await page.waitForXPath(obj_locator.signInSignUpButton);
    const element = await page.$x(obj_locator.signInSignUpButton);
    await element[0].click();
}
async function clickOnNoThanks(page){
    await page.waitForXPath(obj_locator.noThanksButton)
    const element = await page.$x(obj_locator.noThanksButton)
    await element[0].click();
}
async function isSignInSignUpButton(page){
    await page.waitForXPath(obj_locator.signInSignUpButton, {
        visible: true,
      })
}
module.exports={
    clickOnSignInSignUp,
    clickOnNoThanks,
    isSignInSignUpButton,
}