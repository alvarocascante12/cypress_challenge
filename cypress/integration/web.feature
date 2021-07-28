Feature: web 

    user sign up , log and shop in the web
    
    Scenario: user sign in , log and shop in the web 
    Given Sign up
    When Log in
    Then cart add
    Then verificate cart
    
    