Feature: Sauce Demo Side Bar Menu Tests @menu
    As a user of the Sauce Demo website
    I want to be able to interact with the side bar menu
    So that I can navigate through the application and perform actions

    Background:
        Given I am on the SauceDemo login page
        When I enter "standard_user" and "secret_sauce"

    Scenario: Verify that the side bar menu can be opened and closed
        When I click on the menu button
        Then the side bar menu should be open
        When I click on the close button in the side bar menu
        Then the side bar menu should be closed

    Scenario: Verify that clicking on "All Items" navigates to the inventory page
        When I click on the menu button
        Then the side bar menu should be open
        When I click on "All Items" in the side bar menu
        Then I should be navigated to the inventory page

    Scenario: Verify that clicking on "About" navigates to the about page
        When I click on the menu button
        Then the side bar menu should be open
        When I click on "About" in the side bar menu
        Then I should be navigated to the about page

    Scenario: Verify that clicking on "Logout" logs out the user
        When I click on the menu button
        Then the side bar menu should be open
        When I click on "Logout" in the side bar menu
        Then I should be logged out and redirected to the login page

    Scenario: Verify that clicking on "Reset App State" resets the application state
        Given I added a product with name "Sauce Labs Backpack" to the cart
        When I click on the menu button
        Then the side bar menu should be open
        When I click on "Reset App State" in the side bar menu
        Then I verify the number of items in the cart is not visible