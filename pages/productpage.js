const obj_locator = require('../object_locator/productpage.js');
const chai = require('chai');
const assert = chai.assert; 

async function getProductPriceFromProductPage(page){
    await page.waitForXPath(obj_locator.productPrice)
    let element = await page.$x(obj_locator.productPrice)
    let productPrice = await page.evaluate(e1 => e1.textContent,element[0])
    return productPrice.substring(1);
}
async function verifyProductPriceIsSameAsResultPage(first,second){
    assert.equal(first,second,"Equal Price")
}
async function clickOnBuyNowButtonOnProductPage(page){
    await page.waitForXPath(obj_locator.buyNowButton);
    const element = await page.$x(obj_locator.buyNowButton);
    await element[0].click();
}
async function clickOnProceedToCheckOutButtonOnProductPage(page){
    await page.waitForXPath(obj_locator.proceedToCheckOutButton);
    const element = await page.$x(obj_locator.proceedToCheckOutButton);
    await element[0].click();
}
async function clickOnContinueButtonOnProductPage(page){
    await page.waitForXPath(obj_locator.continueButton);
    const element = await page.$x(obj_locator.continueButton);
    await element[0].click();
}
async function typeCardNumberOnProductPage(page,cardno){
    await page.waitForXPath(obj_locator.cardNumberInput);
    const element = await page.$x(obj_locator.cardNumberInput)
    await element[0].type(cardno,{delay : 100});
}
async function typeDateOnProductPage(page,date){
    await page.waitForXPath(obj_locator.dateInput);
    const element = await page.$x(obj_locator.dateInput)
    await element[0].type(date,{delay : 100});
}
async function typeCVVOnProductPage(page,cvv){
    await page.waitForXPath(obj_locator.cvvInput);
    const element = await page.$x(obj_locator.cvvInput)
    await element[0].type(cvv,{delay : 100});
}
async function typeCardHolderNameOnProductPage(page,cardHolderName){
    await page.waitForXPath(obj_locator.cardHolderNameInput);
    const element = await page.$x(obj_locator.cardHolderNameInput)
    await element[0].type(cardHolderName,{delay : 100});
}

module.exports = {
    getProductPriceFromProductPage,
    verifyProductPriceIsSameAsResultPage,
    clickOnBuyNowButtonOnProductPage,
    clickOnProceedToCheckOutButtonOnProductPage,
    clickOnContinueButtonOnProductPage,
    typeCardNumberOnProductPage,
    typeDateOnProductPage,
    typeCVVOnProductPage,
    typeCardHolderNameOnProductPage
}