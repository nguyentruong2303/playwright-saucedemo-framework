// Generated from: features/login.feature
import { test } from "playwright-bdd";

test.describe('SauceDemo Login Tests', () => {

  test('Successful login with valid credentials', { tag: ['@login'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the SauceDemo login page', null, { page }); 
    await When('I enter "standard_user" and "secret_sauce"', null, { page }); 
    await Then('I should be redirected to the inventory page', null, { page }); 
  });

  test.describe('Unsuccessful login with invalid credentials', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('I am on the SauceDemo login page', null, { page }); 
      await When('I enter "invalid_user" and "secret_sauce"', null, { page }); 
      await Then('I should see an "Epic sadface: Username and password do not match any user in this service"', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('I am on the SauceDemo login page', null, { page }); 
      await When('I enter "" and ""', null, { page }); 
      await Then('I should see an "Epic sadface: Username is required"', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('I am on the SauceDemo login page', null, { page }); 
      await When('I enter "standard_user" and ""', null, { page }); 
      await Then('I should see an "Epic sadface: Password is required"', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('I am on the SauceDemo login page', null, { page }); 
      await When('I enter "locked_out_user" and "secret_sauce"', null, { page }); 
      await Then('I should see an "Epic sadface: Sorry, this user has been locked out."', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the inventory page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I enter \"invalid_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":8,"value":"\"invalid_user\"","children":[{"start":9,"value":"invalid_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":27,"value":"\"secret_sauce\"","children":[{"start":28,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see an \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":17,"value":"Epic sadface: Username and password do not match any user in this service","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I enter \"\" and \"\"","stepMatchArguments":[{"group":{"start":8,"value":"\"\"","children":[{"start":9,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":15,"value":"\"\"","children":[{"start":16,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see an \"Epic sadface: Username is required\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Epic sadface: Username is required\"","children":[{"start":17,"value":"Epic sadface: Username is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"\"","stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"\"","children":[{"start":29,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see an \"Epic sadface: Password is required\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Epic sadface: Password is required\"","children":[{"start":17,"value":"Epic sadface: Password is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I enter \"locked_out_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":8,"value":"\"locked_out_user\"","children":[{"start":9,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":30,"value":"\"secret_sauce\"","children":[{"start":31,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see an \"Epic sadface: Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Epic sadface: Sorry, this user has been locked out.\"","children":[{"start":17,"value":"Epic sadface: Sorry, this user has been locked out.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end