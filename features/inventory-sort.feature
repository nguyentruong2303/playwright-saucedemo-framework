Feature: Inventory Sort Tests @inventory-sort
    As a user of the Sauce Demo website
    I want to be able to sort the inventory items
    So that I can view the products in my preferred order

    Background:
        Given I am on the SauceDemo login page
        When I enter "standard_user" and "secret_sauce"

    Scenario: Verify that sorting by "Name (A to Z)" works correctly
        When I select "az" from the sort dropdown
        Then The inventory items should be sorted in "ascending" order by "name"

    Scenario: Verify that sorting by "Name (Z to A)" works correctly
        When I select "za" from the sort dropdown
        Then The inventory items should be sorted in "descending" order by "name"

    Scenario: Verify that sorting by "Price (low to high)" works correctly
        When I select "lohi" from the sort dropdown
        Then The inventory items should be sorted in "ascending" order by "price"

    Scenario: Verify that sorting by "Price (high to low)" works correctly
        When I select "hilo" from the sort dropdown
        Then The inventory items should be sorted in "descending" order by "price"