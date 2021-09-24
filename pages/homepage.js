const obj_locator = require('../object_locator/homepage.js');
const comman_action = require('../common_action/commonAction.js'); 
const help_testdata = require('../common_action/help_testdata.json');
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

async function clickOnHelpIconPopup(page){
    const [elementHandle] = await page.$x(obj_locator.iframe)
    const frame = await elementHandle.contentFrame();
    await frame.waitForXPath(obj_locator.helpIframe)
    const e = await frame.$x(obj_locator.helpIframe)
    await e[0].click();
 
}
async function typeEmailAddressInHelpPopup(page,email){
    const [elementHandle] = await page.$x(obj_locator.iframe)
    const frame = await elementHandle.contentFrame();
    await frame.waitForXPath(obj_locator.helpEmail)
    const e = await frame.$x(obj_locator.helpEmail)
    await e[0].type(obj_locator.helpEmail,email,{delay:100})
    
    // await page.waitForXPath(obj_locator.helpEmail)
    // await page.type(obj_locator.helpEmail,email,{delay:100})
}
async function typeMobileNumberInHelpPopup(page,mobile_number){
    const [elementHandle] = await page.$x(obj_locator.iframe)
    const frame = await elementHandle.contentFrame();
    await frame.waitForXPath(obj_locator.helpMobileNumber)
    const e = await frame.$x(obj_locator.helpMobileNumber)
    await e[0].type(obj_locator.helpMobileNumber,mobile_number,{delay:100})   
}
async function typeDescriptionInHelpPopup(page,description){
    const [elementHandle] = await page.$x(obj_locator.iframe)
    const frame = await elementHandle.contentFrame();
    await frame.waitForXPath(obj_locator.helpDescription)
    const e = await frame.$x(obj_locator.helpDescription)
    await e[0].type(obj_locator.helpDescription,description,{delay:100})
}
async function clickOnQueryDropDownInHelpPopup(page){
    const [elementHandle] = await page.$x(obj_locator.iframe)
    const frame = await elementHandle.contentFrame();
    await frame.waitForXPath(obj_locator.helpQueryDropDown)
    const e = await frame.$x(obj_locator.helpQueryDropDown)
    await e[0].click();
}
async function ifHelpIsVisible(page){
 if(await comman_action.isHelpVisible(page,obj_locator.helpIframe)){
    await page.clickOnHelpIconPopup(page,help_testdata.email)
    await page.typeEmailAddressInHelpPopup(page,help_testdata.mobile_number)
    await page.clickOnQueryDropDownInHelpPopup(page)
    await page.typeDescriptionInHelpPopup(page.help_testdata.description)
 }
}
module.exports = {
    getUsernameFromNavigationBar,
    verifyUsernameFromNavigationBar,
    clickOnUsernameDropDown,
    clickOnUsernameDropDownAccountInformation,
    searchForProduct,
    clickOnUsernameDropDownLogout,
    ifHelpIsVisible,
    clickOnHelpIconPopup,
    typeEmailAddressInHelpPopup,
    typeMobileNumberInHelpPopup,
    typeDescriptionInHelpPopup,
    clickOnQueryDropDownInHelpPopup
}