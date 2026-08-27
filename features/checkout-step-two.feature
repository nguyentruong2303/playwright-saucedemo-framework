Feature: Checkout Step Two Tests @checkout-step-two @checkout-complete
    As a user of Sauce Demo Website
    I want to verify the checkout step two

    Background:
        Given I am on the SauceDemo login page
        When I enter "standard_user" and "secret_sauce"

    Scenario: Verify that can finished the checkout process and navigate to the checkout complete page
        Given I have added the following products to the cart:
            | Sauce Labs Backpack   |
            | Sauce Labs Bike Light |
        Then I verify the number of items in the cart is 2
        When I click on the shopping cart link
        When I click on Checkout button
        When I enter the following fields:
            | field       | value |
            | firstName   | John  |
            | lastName    | Doe   |
            | postalCode | 12345 |
        Then I verify that redirected to the checkout step two page
        Then I verify that the cart contain the following items:
            | name                  | price  | quantity |
            | Sauce Labs Backpack   | $29.99 | 1        |
            | Sauce Labs Bike Light | $9.99  | 1        |
        Then I verify the price total is displayed correct in the following:
            | item | tax   | total  |
            | $39.98     | $3.20 | $43.18 |
        When I click on Finish button
        Then I verify that redirected to the checkout complete page

        # Verify that navigate back to products page when clicking on Back button on the checkout complete
        When I click on Back Home button
        Then I should be navigated to the inventory page
        Then I verify the number of items in the cart is not visible

    Scenario: Verify that navigate back to the cart page when clicking on the cancel button
        Given I have added the following products to the cart:
            | Sauce Labs Backpack   |
            | Sauce Labs Bike Light |
        Then I verify the number of items in the cart is 2
        When I click on the shopping cart link
        When I click on Checkout button
        When I enter the following fields:
            | field       | value |
            | firstName   | John  |
            | lastName    | Doe   |
            | postalCode | 12345 |
        Then I verify that redirected to the checkout step two page
        When I click on Cancel button on the checkout step two page
        Then I should be navigated to the inventory page