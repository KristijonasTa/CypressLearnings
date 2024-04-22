@regression
Feature: WebUni login page
    Scenario: Login using valid credentials

        Given I access WebUni login portal page
        When I enter a username webdriver
        And I enter the password webdriver123
        And I click on the login button
        Then I should be presented with the following message validation succeeded


    Scenario: Login using invalid credentials

        Given I access WebUni login portal page
        When I enter a username webdriver
        And I enter the password webdriver555
        And I click on the login button
        Then I should be presented with the following message validation failed

    Scenario Outline: Test Login via WebUni Login Portal
        Given I access WebUni login portal page
        When I enter a username <username>
        And I enter the password <password>
        And I click on the login button
        Then I should be presented with the following message <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver555 | validation failed    |
            | webdriver | value        | validation failed    |


