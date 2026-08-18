Feature: Inventory Navigation Tests @inventory-navigation
    As a user of the Sauce Demo website
    I want to be able to navigate through the inventory items
    So that I can view and interact with the products

    Background:
        Given I am on the SauceDemo login page
        When I enter "standard_user" and "secret_sauce"

    Scenario: Verify display exactly 6 inventory items on the inventory page
        Then I verify that there are exactly 6 inventory items displayed on the inventory page

    Scenario: Verify that clicking on an inventory item navigates to the item details page
        When I click on the inventory item with name "Sauce Labs Backpack"
        Then I should be navigated to the item detail page for "Sauce Labs Backpack"

    Scenario: Verify that clicking on the back button navigates back to the inventory page
        Given I click on the inventory item with name "Sauce Labs Backpack"
        When I click on the back button
        Then I should be navigated back to the inventory page
    
    Scenario: Verify that update the cart icon when adding an item to the cart
        When I added a product with name "Sauce Labs Backpack" to the cart
        Then I verify the number of items in the cart is 1
        When I click on the shopping cart link
        When I remove all the products from the cart
        Then I verify the number of items in the cart is not visible