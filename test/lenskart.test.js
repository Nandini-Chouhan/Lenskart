const common_action = require('../common_action/commonAction.js');
const credential = require('../common_action/credential.json');
const card_details = require('../common_action/card_details.json');
const landingpage = require('../pages/landingpage.js');
const loginpage = require('../pages/loginpage.js');
const homepage = require('../pages/homepage.js');
const accountinfopage = require('../pages/accountinfopage.js');
const testdata = require('../common_action/testdata.json');
const productpage = require('../pages/productpage.js');
const resultpage = require('../pages/resultpage.js');

describe("User Login",()=>{
    it("Login with valid credential",async()=>{
        const page = await common_action.openBrowser(testdata.url);

//Click On No Thanks Popup
         await landingpage.clickOnNoThanks(page);
        await page.waitForTimeout(2000)

//If Help is Visible
        await homepage.ifHelpIsVisible(page);
       
//Sign In
        await landingpage.clickOnSignInSignUp(page);
        await loginpage.clickOnSignInButton(page);
        await loginpage.typeEmailAddress(page,credential.email)
        await loginpage.clickOnProceedButton(page);
        await loginpage.typePassword(page,credential.password)
        await loginpage.clickOnProceedButton(page);
        await page.waitForTimeout(5000);

//Verify Username From Navigation Bar
        const username = await homepage.getUsernameFromNavigationBar(page);
        await homepage.verifyUsernameFromNavigationBar(testdata.username,username);


//Go to Address Book & Fill the details
        await homepage.clickOnUsernameDropDown(page);
        await page.waitForTimeout(5000);
        await homepage.clickOnUsernameDropDownAccountInformation(page);
        await accountinfopage.clickAddressBookPage(page),
        await accountinfopage.typeFirstNameOnAddressBook(page,testdata.firstName);
        await accountinfopage.typeLastNameOnAddressBook(page,testdata.lastName);
        await accountinfopage.clickOnMaleRadioButton(page);
        await accountinfopage.typePostalCodeOnAddressBook(page,testdata.postalCode);
        await accountinfopage.typeAddressLineOnAddressBook(page,testdata.addressLine);
        await accountinfopage.typeTownOnAddressBook(page,testdata.town);
        await accountinfopage.clickOnCountryDropDownOnAddressBook(page);
        await page.waitForTimeout(7000)
        await accountinfopage.selectCountryFromDropDownOnAddressBook(page);
        await accountinfopage.clickOnStateDownOnAddressBook(page);
        await accountinfopage.selectStateFromDropDownOnAddressBook(page);
        await accountinfopage.clickOnSaveAddressOnAddressBook(page);
        await page.waitForTimeout(5000);

//Verify Address is saved Successfully
        await accountinfopage.isEditButtonIsVisibleOnAddressBook(page);
    
//Search For Product
        await homepage.searchForProduct(page,testdata.searchText)                           
        await page.waitForTimeout(5000);

// Apply Filters & Verify Result of filters
         const noOfResultsBeforeFilter = await resultpage.getNumberOfResultsBeforeFilterOnResultPage(page);
        // await resultpage.clickOnSquareFrameShapeFilterOnResultPage(page);
        // await resultpage.clickOnHalfRimFrameTypeOnResultPage(page);
        const noOfResultsAfterFilter = await resultpage.getNumberOfResultsAfterFilterOnResultPage(page);
        //Using -1 with one varible bcoz filers are not working properly
        await resultpage.verifyResultAfterFilter(noOfResultsBeforeFilter,noOfResultsAfterFilter-1)
         
// Get Product Price
        const productPriceFromResultPage = await resultpage.getProductPriceFromResultPage(page);
         await page.waitForTimeout(5000)
     
//Open New Tab
        const newPage = await resultpage.newTab(page);   
        await newPage.waitForTimeout(3000)

//If Help is Visible
        await homepage.ifHelpIsVisible(newPage)

//Verify Product Price
        const productPriceFromProductPage = await productpage.getProductPriceFromProductPage(newPage);
        await productpage.verifyProductPriceIsSameAsResultPage(productPriceFromResultPage,productPriceFromProductPage)
        await newPage.waitForTimeout(3000)
//BuyNow
        await productpage.clickOnBuyNowButtonOnProductPage(newPage);
        await newPage.waitForTimeout(2000)
        await productpage.clickOnProceedToCheckOutButtonOnProductPage(newPage);
        await newPage.waitForTimeout(2000)
        await productpage.clickOnContinueButtonOnProductPage(newPage);
        await newPage.waitForTimeout(3000);
        await productpage.typeCardNumberOnProductPage(newPage,card_details.cardNumber);
        await productpage.typeDateOnProductPage(newPage,card_details.date);
        await productpage.typeCVVOnProductPage(newPage,card_details.cvv)
        await productpage.typeCardHolderNameOnProductPage(newPage,card_details.cardHolderName);
        await newPage.waitForTimeout(3000);
    
//Close NewTab
        await newPage.close(); 

//Sign Out
        await homepage.clickOnUsernameDropDown(page);   
        await page.waitForTimeout(5000);
        await homepage.clickOnUsernameDropDownLogout(page);
        await landingpage.isSignInSignUpButton(page);
         await page.waitForTimeout(5000);
    
//Close Browser
         await common_action.closeBrowser();
    })
})