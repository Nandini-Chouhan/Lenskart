module.exports = {
    addressBookPage : '//ul[@class="my-ac-list"]/li[3]/a',
    firstNameInput : '//form[@name="address"]/div/div/div[1]/div/input',
    lastNameInput : '//form[@name="address"]/div/div/div[2]/div/input',
    mobileInput : '//form[@name="address"]/div/div[2]/div[1]/div/input',
    maleRadioButton : '//div[@class="row"][2]/div[2]/div/label/div/span',
    postalCodeInput : '//div[@class="row"][3]/div[2]//input',
    addressLineInput : '//div[@class="row"][4]/div/div/textarea',
    townInput : '//div[@class="row"][5]/div/div/input',
    districtInput : '//div[@class="row"][5]/div[2]/div/input',
    countryDropDown : '//div[@class="row"][6]/div//select',
    selectCountryFromDropDown : '//div[@class="row"][6]/div//select/option[contains(@value,"IN")]',
    stateDropDown : '//div[@class="row"][6]/div[2]//select',
    selectStateFromDropDown : '//div[@class="row"][6]/div[2]/div/select/option[11]',
    saveAddressButton : '//button[@type="submit"]',
    editButtonOnAddressBook : '//div[@class="userAddresses_item"]'
}