const obj_locator = require('../object_locator/resultpage.js');
const { expect } = require('chai');

async function clickOnSquareFrameShapeFilterOnResultPage(page){
    await page.waitForXPath(obj_locator.squareFrameShapeFilterCheckBox);
    const element = await page.$x(obj_locator.squareFrameShapeFilterCheckBox)
    await element[0].click();
}
async function clickOnHalfRimFrameTypeOnResultPage(page){   
    await page.waitForXPath(obj_locator.halfRimFrameTypeFilterCheckBox);
    const element = await page.$x(obj_locator.halfRimFrameTypeFilterCheckBox)
    await element[0].click();
}
async function clickOnLenskartPriceFilterOnResultPage(page){
    await page.waitForXPath(obj_locator.priceFilterCheckBox);
    const element = await page.$x(obj_locator.priceFilterCheckBox)
    await element[0].click();
}
async function newTab(page){
    await page.setDefaultNavigationTimeout(0);
 await page.waitForXPath(obj_locator.newProductTab);
 const element = await page.$x(obj_locator.newProductTab)
 //await element[0].click();
 const [newPage] = await Promise.all([
    new Promise((resolve) => page.once('popup', async p => {
        await p.waitForNavigation({ waitUntil: 'networkidle0' });
        resolve(p);
      })),
    element[0].focus(),
element[0].click(),
  ]);
  return newPage;
}
async function getNumberOfResultsBeforeFilterOnResultPage(page){
    await page.waitForXPath(obj_locator.resultBeforeFilter);
    let element =  await page.$x(obj_locator.resultBeforeFilter);
    let res = await page.evaluate(e1 => e1.textContent,element[0])
    res = res.substring(13).replace(/[^0-9]/g,'');
    parseInt(res);
    return res;
}
async function getNumberOfResultsAfterFilterOnResultPage(page){
    await page.waitForXPath(obj_locator.resultAfterFilter);
    let element =  await page.$x(obj_locator.resultAfterFilter);
    let res = await page.evaluate(e1 => e1.textContent,element[0])
    res = res.substring(13).replace(/[^0-9]/g,'');
    parseInt(res);
    return res;
}
async function verifyResultAfterFilter(first,second){
    expect(first).to.not.equal(second);
}
async function getProductPriceFromResultPage(page){
    await page.waitForXPath(obj_locator.productPrice)
    let element = await page.$x(obj_locator.productPrice)
    let productPrice = await page.evaluate(e1 => e1.textContent,element[0])
    return productPrice.substring(1);
}
module.exports = {
clickOnSquareFrameShapeFilterOnResultPage,
clickOnHalfRimFrameTypeOnResultPage,
clickOnLenskartPriceFilterOnResultPage,
newTab,
getNumberOfResultsBeforeFilterOnResultPage,
getNumberOfResultsAfterFilterOnResultPage,
verifyResultAfterFilter,
getProductPriceFromResultPage
}