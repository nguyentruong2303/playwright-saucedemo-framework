// Generated from: features/inventory-sort.feature
import { test } from "playwright-bdd";

test.describe('Inventory Sort Tests @inventory-sort', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the SauceDemo login page', null, { page }); 
    await When('I enter "standard_user" and "secret_sauce"', null, { page }); 
  });
  
  test('Verify that sorting by "Name (A to Z)" works correctly', async ({ When, Then, page }) => { 
    await When('I select "az" from the sort dropdown', null, { page }); 
    await Then('The inventory items should be sorted in "ascending" order by "name"', null, { page }); 
  });

  test('Verify that sorting by "Name (Z to A)" works correctly', async ({ When, Then, page }) => { 
    await When('I select "za" from the sort dropdown', null, { page }); 
    await Then('The inventory items should be sorted in "descending" order by "name"', null, { page }); 
  });

  test('Verify that sorting by "Price (low to high)" works correctly', async ({ When, Then, page }) => { 
    await When('I select "lohi" from the sort dropdown', null, { page }); 
    await Then('The inventory items should be sorted in "ascending" order by "price"', null, { page }); 
  });

  test('Verify that sorting by "Price (high to low)" works correctly', async ({ When, Then, page }) => { 
    await When('I select "hilo" from the sort dropdown', null, { page }); 
    await Then('The inventory items should be sorted in "descending" order by "price"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/inventory-sort.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I select \"az\" from the sort dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"az\"","children":[{"start":10,"value":"az","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then The inventory items should be sorted in \"ascending\" order by \"name\"","stepMatchArguments":[{"group":{"start":40,"value":"\"ascending\"","children":[{"start":41,"value":"ascending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"\"name\"","children":[{"start":62,"value":"name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I select \"za\" from the sort dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"za\"","children":[{"start":10,"value":"za","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then The inventory items should be sorted in \"descending\" order by \"name\"","stepMatchArguments":[{"group":{"start":40,"value":"\"descending\"","children":[{"start":41,"value":"descending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"\"name\"","children":[{"start":63,"value":"name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I select \"lohi\" from the sort dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"lohi\"","children":[{"start":10,"value":"lohi","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then The inventory items should be sorted in \"ascending\" order by \"price\"","stepMatchArguments":[{"group":{"start":40,"value":"\"ascending\"","children":[{"start":41,"value":"ascending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"\"price\"","children":[{"start":62,"value":"price","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I select \"hilo\" from the sort dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"hilo\"","children":[{"start":10,"value":"hilo","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then The inventory items should be sorted in \"descending\" order by \"price\"","stepMatchArguments":[{"group":{"start":40,"value":"\"descending\"","children":[{"start":41,"value":"descending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"\"price\"","children":[{"start":63,"value":"price","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end