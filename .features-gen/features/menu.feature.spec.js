// Generated from: features/menu.feature
import { test } from "playwright-bdd";

test.describe('Sauce Demo Side Bar Menu Tests @menu', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the SauceDemo login page', null, { page }); 
    await When('I enter "standard_user" and "secret_sauce"', null, { page }); 
  });
  
  test('Verify that the side bar menu can be opened and closed', async ({ When, Then, page }) => { 
    await When('I click on the menu button', null, { page }); 
    await Then('the side bar menu should be open', null, { page }); 
    await When('I click on the close button in the side bar menu', null, { page }); 
    await Then('the side bar menu should be closed', null, { page }); 
  });

  test('Verify that clicking on "All Items" navigates to the inventory page', async ({ When, Then, page }) => { 
    await When('I click on the menu button', null, { page }); 
    await Then('the side bar menu should be open', null, { page }); 
    await When('I click on "All Items" in the side bar menu', null, { page }); 
    await Then('I should be navigated to the inventory page', null, { page }); 
  });

  test('Verify that clicking on "About" navigates to the about page', async ({ When, Then, page }) => { 
    await When('I click on the menu button', null, { page }); 
    await Then('the side bar menu should be open', null, { page }); 
    await When('I click on "About" in the side bar menu', null, { page }); 
    await Then('I should be navigated to the about page', null, { page }); 
  });

  test('Verify that clicking on "Logout" logs out the user', async ({ When, Then, page }) => { 
    await When('I click on the menu button', null, { page }); 
    await Then('the side bar menu should be open', null, { page }); 
    await When('I click on "Logout" in the side bar menu', null, { page }); 
    await Then('I should be logged out and redirected to the login page', null, { page }); 
  });

  test('Verify that clicking on "Reset App State" resets the application state', async ({ Given, When, Then, page }) => { 
    await Given('I added a product with name "Sauce Labs Backpack" to the cart', null, { page }); 
    await When('I click on the menu button', null, { page }); 
    await Then('the side bar menu should be open', null, { page }); 
    await When('I click on "Reset App State" in the side bar menu', null, { page }); 
    await Then('I verify the number of items in the cart is not visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/menu.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I click on the menu button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the side bar menu should be open","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I click on the close button in the side bar menu","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the side bar menu should be closed","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click on the menu button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the side bar menu should be open","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I click on \"All Items\" in the side bar menu","stepMatchArguments":[{"group":{"start":11,"value":"\"All Items\"","children":[{"start":12,"value":"All Items","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the inventory page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I click on the menu button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then the side bar menu should be open","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When I click on \"About\" in the side bar menu","stepMatchArguments":[{"group":{"start":11,"value":"\"About\"","children":[{"start":12,"value":"About","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the about page","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I click on the menu button","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then the side bar menu should be open","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When I click on \"Logout\" in the side bar menu","stepMatchArguments":[{"group":{"start":11,"value":"\"Logout\"","children":[{"start":12,"value":"Logout","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then I should be logged out and redirected to the login page","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given I added a product with name \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":28,"value":"\"Sauce Labs Backpack\"","children":[{"start":29,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When I click on the menu button","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then the side bar menu should be open","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When I click on \"Reset App State\" in the side bar menu","stepMatchArguments":[{"group":{"start":11,"value":"\"Reset App State\"","children":[{"start":12,"value":"Reset App State","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then I verify the number of items in the cart is not visible","stepMatchArguments":[]}]},
]; // bdd-data-end