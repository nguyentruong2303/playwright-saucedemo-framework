// Generated from: features/inventory-navigation.feature
import { test } from "playwright-bdd";

test.describe('Inventory Navigation Tests @inventory-navigation', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the SauceDemo login page', null, { page }); 
    await When('I enter "standard_user" and "secret_sauce"', null, { page }); 
  });
  
  test('Verify display exactly 6 inventory items on the inventory page', async ({ Then, page }) => { 
    await Then('I verify that there are exactly 6 inventory items displayed on the inventory page', null, { page }); 
  });

  test('Verify that clicking on an inventory item navigates to the item details page', async ({ When, Then, page }) => { 
    await When('I click on the inventory item with name "Sauce Labs Backpack"', null, { page }); 
    await Then('I should be navigated to the item detail page for "Sauce Labs Backpack"', null, { page }); 
  });

  test('Verify that clicking on the back button navigates back to the inventory page', async ({ Given, When, Then, page }) => { 
    await Given('I click on the inventory item with name "Sauce Labs Backpack"', null, { page }); 
    await When('I click on the back button', null, { page }); 
    await Then('I should be navigated back to the inventory page', null, { page }); 
  });

  test('Verify that update the cart icon when adding an item to the cart', async ({ When, Then, page }) => { 
    await When('I added a product with name "Sauce Labs Backpack" to the cart', null, { page }); 
    await Then('I verify the number of items in the cart is 1', null, { page }); 
    await When('I click on the shopping cart link', null, { page }); 
    await When('I remove all the products from the cart', null, { page }); 
    await Then('I verify the number of items in the cart is not visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/inventory-navigation.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I verify that there are exactly 6 inventory items displayed on the inventory page","stepMatchArguments":[{"group":{"start":32,"value":"6"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on the inventory item with name \"Sauce Labs Backpack\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Sauce Labs Backpack\"","children":[{"start":41,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the item detail page for \"Sauce Labs Backpack\"","stepMatchArguments":[{"group":{"start":50,"value":"\"Sauce Labs Backpack\"","children":[{"start":51,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given I click on the inventory item with name \"Sauce Labs Backpack\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Sauce Labs Backpack\"","children":[{"start":41,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I click on the back button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated back to the inventory page","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I added a product with name \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":28,"value":"\"Sauce Labs Backpack\"","children":[{"start":29,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then I verify the number of items in the cart is 1","stepMatchArguments":[{"group":{"start":44,"value":"1"},"parameterTypeName":"int"}]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When I click on the shopping cart link","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When I remove all the products from the cart","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then I verify the number of items in the cart is not visible","stepMatchArguments":[]}]},
]; // bdd-data-end