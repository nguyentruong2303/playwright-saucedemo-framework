// Generated from: features/checkout-step-two.feature
import { test } from "playwright-bdd";

test.describe('Checkout Step Two Tests @checkout-step-two @checkout-complete', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the SauceDemo login page', null, { page }); 
    await When('I enter "standard_user" and "secret_sauce"', null, { page }); 
  });
  
  test('Verify that can finished the checkout process and navigate to the checkout complete page', async ({ Given, When, Then, page }) => { 
    await Given('I have added the following products to the cart:', {"dataTable":{"rows":[{"cells":[{"value":"Sauce Labs Backpack"}]},{"cells":[{"value":"Sauce Labs Bike Light"}]}]}}, { page }); 
    await Then('I verify the number of items in the cart is 2', null, { page }); 
    await When('I click on the shopping cart link', null, { page }); 
    await When('I click on Checkout button', null, { page }); 
    await When('I enter the following fields:', {"dataTable":{"rows":[{"cells":[{"value":"field"},{"value":"value"}]},{"cells":[{"value":"firstName"},{"value":"John"}]},{"cells":[{"value":"lastName"},{"value":"Doe"}]},{"cells":[{"value":"postalCode"},{"value":"12345"}]}]}}, { page }); 
    await Then('I verify that redirected to the checkout step two page', null, { page }); 
    await Then('I verify that the cart contain the following items:', {"dataTable":{"rows":[{"cells":[{"value":"name"},{"value":"price"},{"value":"quantity"}]},{"cells":[{"value":"Sauce Labs Backpack"},{"value":"$29.99"},{"value":"1"}]},{"cells":[{"value":"Sauce Labs Bike Light"},{"value":"$9.99"},{"value":"1"}]}]}}, { page }); 
    await Then('I verify the price total is displayed correct in the following:', {"dataTable":{"rows":[{"cells":[{"value":"item"},{"value":"tax"},{"value":"total"}]},{"cells":[{"value":"$39.98"},{"value":"$3.20"},{"value":"$43.18"}]}]}}, { page }); 
    await When('I click on Finish button', null, { page }); 
    await Then('I verify that redirected to the checkout complete page', null, { page }); 
    await When('I click on Back Home button', null, { page }); 
    await Then('I should be navigated to the inventory page', null, { page }); 
    await Then('I verify the number of items in the cart is not visible', null, { page }); 
  });

  test('Verify that navigate back to the cart page when clicking on the cancel button', async ({ Given, When, Then, page }) => { 
    await Given('I have added the following products to the cart:', {"dataTable":{"rows":[{"cells":[{"value":"Sauce Labs Backpack"}]},{"cells":[{"value":"Sauce Labs Bike Light"}]}]}}, { page }); 
    await Then('I verify the number of items in the cart is 2', null, { page }); 
    await When('I click on the shopping cart link', null, { page }); 
    await When('I click on Checkout button', null, { page }); 
    await When('I enter the following fields:', {"dataTable":{"rows":[{"cells":[{"value":"field"},{"value":"value"}]},{"cells":[{"value":"firstName"},{"value":"John"}]},{"cells":[{"value":"lastName"},{"value":"Doe"}]},{"cells":[{"value":"postalCode"},{"value":"12345"}]}]}}, { page }); 
    await Then('I verify that redirected to the checkout step two page', null, { page }); 
    await When('I click on Cancel button on the checkout step two page', null, { page }); 
    await Then('I should be navigated to the inventory page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/checkout-step-two.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I have added the following products to the cart:","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I verify the number of items in the cart is 2","stepMatchArguments":[{"group":{"start":44,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on the shopping cart link","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I click on Checkout button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I enter the following fields:","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I verify that redirected to the checkout step two page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I verify that the cart contain the following items:","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I verify the price total is displayed correct in the following:","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I click on Finish button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then I verify that redirected to the checkout complete page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When I click on Back Home button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the inventory page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then I verify the number of items in the cart is not visible","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given I have added the following products to the cart:","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then I verify the number of items in the cart is 2","stepMatchArguments":[{"group":{"start":44,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":30,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When I click on the shopping cart link","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When I click on Checkout button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When I enter the following fields:","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then I verify that redirected to the checkout step two page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When I click on Cancel button on the checkout step two page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the inventory page","stepMatchArguments":[]}]},
]; // bdd-data-end