Feature: SauceDemo Login Tests
    As a user, I want to log in to the SauceDemo website so that I can access my account and perform actions.

    @login
    Scenario: Successful login with valid credentials
        Given I am on the SauceDemo login page
        When I enter "standard_user" and "secret_sauce"
        Then I should be redirected to the inventory page

    Scenario Outline: Unsuccessful login with invalid credentials
        Given I am on the SauceDemo login page
        When I enter "<username>" and "<password>"
        Then I should see an "<message>"

        Examples:
            | username        | password     | message                                                             |
            | invalid_user    | secret_sauce | Epic sadface: Username and password do not match any user in this service |
            |                 |              | Epic sadface: Username is required                                        |
            | standard_user   |              | Epic sadface: Password is required                                        |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |