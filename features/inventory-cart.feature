Feature: Inventory Cart Tests @inventory-cart
    As a user of the Sauce Demo website
    I want to be able to add and remove items from the cart
    So that I can manage my shopping experience

    Background:
        Given I am on the SauceDemo login page
        When I enter "standard_user" and "secret_sauce"

    @inventory-1
    Scenario: Verify that displaying Remote button after adding an item to the cart and displaying Add to Cart button after removing an item from the cart
        Given I added a product with name "Sauce Labs Backpack" to the cart
        Then I verify the number of items in the cart is 1
        When I added a product with name "Sauce Labs Bike Light" to the cart
        Then I verify the number of items in the cart is 2
        When I click on the inventory item with name "Sauce Labs Backpack"
        Then I verify that the Remove button is displayed
        When I click on the remove button
        Then I verify the number of items in the cart is 1
        Then I verify that the Add to Cart button is displayed

        # Clear data after test
        When I click on the shopping cart link
        When I remove all the products from the cart
        Then I verify the number of items in the cart is not visible

    @inventory-2
    Scenario: Verify that displaying the correct number of cart items when adding many products to the cart
        Given I added a product with name "Sauce Labs Backpack" to the cart
        Then I verify the number of items in the cart is 1
        Given I added a product with name "Sauce Labs Bike Light" to the cart
        Then I verify the number of items in the cart is 2
        Given I added a product with name "Sauce Labs Bolt T-Shirt" to the cart
        Then I verify the number of items in the cart is 3

        # Clear data after test
        When I click on the shopping cart link
        When I remove all the products from the cart
        Then I verify the number of items in the cart is not visible

    @inventory-3
    Scenario: Verify that user can add and remove products from product detail page
        Given I added a product with name "Sauce Labs Backpack" to the cart
        Then I click on the inventory item with name "Sauce Labs Bike Light"
        Then I click on the add to cart button
        Then I click on the back button
        When I verify the number of items in the cart is 2

        Then I click on the inventory item with name "Sauce Labs Bike Light"
        Then I click on the remove button
        Then I verify the number of items in the cart is 1

        # Clear data after test
        When I click on the shopping cart link
        When I remove all the products from the cart
        Then I verify the number of items in the cart is not visible
        