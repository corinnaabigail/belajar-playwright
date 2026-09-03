Feature: Login to OrangeHRM

Scenario: Login with Invalid Credential
    Given I open OrangeHRM login page
    When I input username "Admin" and password "p@ssw0rd"
    Then I able to see the error message "Invalid credentials"

Scenario: Login with Username Empty
    Given I open OrangeHRM login page
    When I Leave the username Empty
    And I input password "Admin123"
    And I click Login Button
    Then I able to see the username required message "Required"

Scenario: Login with Password Empty
    Given I open OrangeHRM login page
    When I input username "Admin"
    And I Leave the password Empty
    And I click Login Button
    Then I able to see the password required message "Required"

Scenario: Login with Both Username and Password Empty
    Given I open OrangeHRM login page
    When I Leave the username and password Empty
    And I click Login Button
    Then I able to see the username dan password required message "Required"

Scenario: Login with Valid Credential
    Given I open OrangeHRM login page
    When I input username "Admin" and password "admin123"
    Then I Successfully login to Dashboard