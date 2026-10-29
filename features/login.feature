Feature: Login

  @smoke @TC-001
  Scenario: Successful login
    Given I am on the login page
    When I log in as "standard_user" with password "secret_sauce"
    Then I see the products page

  @TC-002
  Scenario: Login with wrong password
    Given I am on the login page
    When I log in as "standard_user" with password "wrong_password"
    Then I see the error message containing "do not match"

  @TC-003
  Scenario: Locked out user cannot log in
    Given I am on the login page
    When I log in as "locked_out_user" with password "secret_sauce"
    Then I see the error message containing "locked out"
