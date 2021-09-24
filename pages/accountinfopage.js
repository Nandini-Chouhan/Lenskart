const obj_locator = require('../object_locator/accountinfopage.js');

async function clickAddressBookPage(page){
    await page.waitForXPath(obj_locator.addressBookPage);
    const element = await page.$x(obj_locator.addressBookPage)
    await element[0].click();
} 
async function typeFirstNameOnAddressBook(page,firstName){
    await page.waitForXPath(obj_locator.firstNameInput);
    const element = await page.$x(obj_locator.firstNameInput)
    await element[0].type(firstName,{delay : 100});
}
async function typeLastNameOnAddressBook(page,lastName){
    await page.waitForXPath(obj_locator.lastNameInput);
    const element = await page.$x(obj_locator.lastNameInput)
    await element[0].type(lastName,{delay : 100});
}
async function typeMobileOnAddressBook(page,mobile){
    await page.waitForXPath(obj_locator.mobileInput);
    const element = await page.$x(obj_locator.mobileInput)
    await element[0].type(mobile,{delay: 100});
}
async function clickOnMaleRadioButton(page){
    await page.waitForXPath(obj_locator.maleRadioButton);
    const element = await page.$x(obj_locator.maleRadioButton)
    await element[0].click();
} 
async function typePostalCodeOnAddressBook(page,postalCode){
    await page.waitForXPath(obj_locator.postalCodeInput);
    const element = await page.$x(obj_locator.postalCodeInput)
    await element[0].type(postalCode,{delay: 100});
}
async function typeAddressLineOnAddressBook(page,addressLine){
    await page.waitForXPath(obj_locator.addressLineInput);
    const element = await page.$x(obj_locator.addressLineInput)
    await element[0].type(addressLine,{delay: 100});
}
async function typeTownOnAddressBook(page,town){
    await page.waitForXPath(obj_locator.townInput);
    const element = await page.$x(obj_locator.townInput)
    await element[0].type(town,{delay: 100});
}
async function typeDistrictOnAddressBook(page,district){
    await page.waitForXPath(obj_locator.districtInput);
    const element = await page.$x(obj_locator.districtInput)
    await element[0].type(district,{delay: 100});
}
async function clickOnCountryDropDownOnAddressBook(page){
    await page.waitForXPath(obj_locator.countryDropDown);
    const element = await page.$x(obj_locator.countryDropDown);
    await element[0].click();
}
async function selectCountryFromDropDownOnAddressBook(page){
   await page.waitForXPath(obj_locator.selectCountryFromDropDown);
    const e= await page.$x(obj_locator.selectCountryFromDropDown);
    await e[0].type("India");

}
async function clickOnStateDownOnAddressBook(page){
    await page.waitForXPath(obj_locator.stateDropDown);
    const element = await page.$x(obj_locator.stateDropDown);
    await element[0].click();
}
async function selectStateFromDropDownOnAddressBook(page){
    await page.waitForXPath(obj_locator.selectStateFromDropDown);
    const e= await page.$x(obj_locator.selectStateFromDropDown);
    await e[0].type("Madhya Pradesh");
}
async function clickOnSaveAddressOnAddressBook(page){
    await page.waitForXPath(obj_locator.saveAddressButton);
    const element = await page.$x(obj_locator.saveAddressButton);
    await element[0].click();
}
async function isEditButtonIsVisibleOnAddressBook(page){
    await page.waitForXPath(obj_locator.editButtonOnAddressBook, {
        visible: true,
      })
}
module.exports ={
    clickAddressBookPage,
    typeFirstNameOnAddressBook,
    typeLastNameOnAddressBook,
    typeMobileOnAddressBook,
    clickOnMaleRadioButton,
    typePostalCodeOnAddressBook,
    typeAddressLineOnAddressBook,
    typeTownOnAddressBook,
    typeDistrictOnAddressBook,
    clickOnCountryDropDownOnAddressBook,
    selectCountryFromDropDownOnAddressBook,
    clickOnStateDownOnAddressBook,
    selectStateFromDropDownOnAddressBook,
    clickOnSaveAddressOnAddressBook,
    isEditButtonIsVisibleOnAddressBook
}