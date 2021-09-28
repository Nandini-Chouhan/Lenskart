const obj_locator = require('../object_locator/homepage.js');
const chai = require('chai');
const assert = chai.assert;

async function getUsernameFromNavigationBar(page){
    await page.waitForXPath(obj_locator.usernameFromHomepage);
    let xpath = await page.$x(obj_locator.usernameFromHomepage);
    const username = await page.evaluate(el => el.textContent, xpath[0]);
    return username;
}
async function verifyUsernameFromNavigationBar(name,username){
    assert.equal(name,username,"Equal")
}
async function clickOnUsernameDropDown(page){
    await page.waitForXPath(obj_locator.usernameDropDown);
    const element = await page.$x(obj_locator.usernameDropDown)
    await element[0].click();
}
async function clickOnUsernameDropDownAccountInformation(page){
    await page.waitForXPath(obj_locator.accountInformation);
    const element = await page.$x(obj_locator.accountInformation)
    await element[0].click();
}
async function clickOnUsernameDropDownLogout(page){
    await page.waitForXPath(obj_locator.logout);
    const element = await page.$x(obj_locator.logout)
    await element[0].click();
}
async function searchForProduct(page,text){
    const element = await page.$x(obj_locator.productSearchBar);
    await element[0].type(text,{delay : 150});
    await page.keyboard.press('Enter');
} 

module.exports = {
    getUsernameFromNavigationBar,
    verifyUsernameFromNavigationBar,
    clickOnUsernameDropDown,
    clickOnUsernameDropDownAccountInformation,
    searchForProduct,
    clickOnUsernameDropDownLogout
}