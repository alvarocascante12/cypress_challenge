Feature: Create Item

    Feature where the user can create a item

    Scenario: Create Item
    Given A user enter to the page with "desktop"
    When A user upload a image "imagen.jpg"
    And A user enter a description
    And A user click create item
    Then A user created an item

    Scenario: Create Item without image
    Given A user enter to the page with "desktop"
    And A user enter a description
    Then the popat appears

    Scenario: Create Item without image after extracting the image
    Given A user enter to the page with "desktop"
    When A user upload a image "imagen.jpg"
    And A user enter a description
    And A user delete the imagen
    Then the popat appears
