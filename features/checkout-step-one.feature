Feature: Checkout Step One Tests @checkout-step-one
    As a user of Sauce Demo website
    I want to verify checkout step one

    Background:
        Given I am on the SauceDemo login page
        When I enter "standard_user" and "secret_sauce"

    Scenario: Verify that can complete the checkout step one pricess successfully
        Given I added a product with name "Sauce Labs Backpack" to the cart
        Then I verify the number of items in the cart is 1
        When I click on the shopping cart link
        When I click on Checkout button
        When I enter the following fields:
            | field       | value |
            | firstName   | John  |
            | lastName    | Doe   |
            | postalCode | 12345 |
        Then I verify that redirected to the checkout step two page

    Scenario: Verify that a message "Error: First Name is required" when the first name field is empty
        Given I added a product with name "Sauce Labs Backpack" to the cart
        Then I verify the number of items in the cart is 1
        When I click on the shopping cart link
        When I click on Checkout button
        When I enter the following fields:
            | field       | value |
            | firstName   |       |
            | lastName    | Doe   |
            | postalCode | 12345 |
        Then I verify that a message "Error: First Name is required" is displayed

    Scenario: Verify that a message "Error: Last Name is required" when the last name field is empty
        Given I added a product with name "Sauce Labs Backpack" to the cart
        Then I verify the number of items in the cart is 1
        When I click on the shopping cart link
        When I click on Checkout button
        When I enter the following fields:
            | field       | value |
            | firstName   | John  |
            | lastName    |       |
            | postalCode | 12345 |
        Then I verify that a message "Error: Last Name is required" is displayed
    
    Scenario: Verify that a message "Error: Postal Code is required" when the postal code field is empty
        Given I added a product with name "Sauce Labs Backpack" to the cart
        Then I verify the number of items in the cart is 1
        When I click on the shopping cart link
        When I click on Checkout button
        When I enter the following fields:
            | field       | value |
            | firstName   | John  |
            | lastName    | Doe   |
            | postalCode |       |
        Then I verify that a message "Error: Postal Code is required" is displayed

    Scenario: Verify that the product is still in the cart after clicking on cancel the checkout process
        Given I have added the following products to the cart:
            | Sauce Labs Backpack   |
            | Sauce Labs Bike Light |
        Then I verify the number of items in the cart is 2
        When I click on the shopping cart link
        When I click on Checkout button
        When I click on Cancel button in checkout process
        Then I should be navigated back to the cart page
        And The cart should contain the following products:
            | Sauce Labs Backpack   |
            | Sauce Labs Bike Light |
