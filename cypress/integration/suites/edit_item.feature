Feature: Edit Item

    Feature Where the users can edit a item

    Scenario: Edit item
    Given A user enter to the page with "desktop"
    When click edit
    And edit a description
    And click update
    Then update item

Scenario:  Edit item imagen
    Given A user enter to the page with "desktop"
    When click edit
    And edit image "imagen.jpg"
    And click update
    Then validate update of the image "imagen.jpg"
