Feature: Check max long characters

    Feature Check max long characters in description

    Scenario:  max long in description
    Given A user enter to the page with "desktop"
    When  enter a description with the max characters
    Then  Check max long in description

    Scenario: excede the max long in description
    Given A user enter to the page with "desktop"
    When enter a description with excess characters
    Then validate click button
