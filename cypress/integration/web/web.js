import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const user_random = Math.random().toString(36).substr(2, 5);
const user_name = 'NewUser'+user_random;


    
Given('Sign up',() => {
    cy.visit(Cypress.env('url'))
    cy.get('a[id="signin2"]').contains('Sign up').click()
    cy.get('#signInModalLabel', { timeout: 10000 }).should('be.visible');
    cy.wait(200)
    cy.get('#sign-username', { timeout: 10000 }).should('be.visible');
    cy.get('#sign-username').type(user_name)
    cy.log(user_name)
    cy.get('#sign-password', { timeout: 10000 }).should('be.visible');
    cy.get('#sign-password').type('Password')
    cy.get('button[type="button"]').contains('Sign up').click()

})

When('Log in',() => {

    cy.get('#login2').contains('Log in').click()
    cy.get('#logInModalLabel', { timeout: 10000 }).should('be.visible');
    cy.wait(200)
    cy.get('#loginusername', { timeout: 10000 }).should('be.visible');
    cy.get('#loginusername').type(user_name)
    cy.get('#loginpassword', { timeout: 10000 }).should('be.visible');
    cy.get('#loginpassword').type('Password')
    cy.get('button[type="button"]').contains('Log in').click()
    cy.get('#logInModalLabel', { timeout: 10000 }).should('not.be.visible');
    cy.get('#tbodyid', { timeout: 10000 }).should('be.visible');

})


Then('cart add',() => {

    cy.get('a[id="itemc"]').contains('Laptops').click()
    cy.wait(200)
    cy.get('a[class="hrefch"]').contains('Sony vaio i5').click({force: true})
    cy.get('#login2').contains('Log in').click()
    cy.get('#logInModalLabel', { timeout: 10000 }).should('be.visible');
    cy.wait(200)
    cy.get('#loginusername', { timeout: 10000 }).should('be.visible');
    cy.get('#loginusername').type(user_name)
    cy.get('#loginpassword', { timeout: 10000 }).should('be.visible');
    cy.get('#loginpassword').type('Password')
    cy.get('button[type="button"]').contains('Log in').click()
    cy.get('#logInModalLabel', { timeout: 10000 }).should('not.be.visible');
    cy.get('a[class="btn btn-success btn-lg"]').contains('Add to cart').click()

})

Then('verificate cart',() =>{

    cy.get('a[class="nav-link"]').contains('Home ').click()
    cy.get('a[class="nav-link"]').contains('Cart').click()
    cy.get('#login2').contains('Log in').click()
    cy.get('#logInModalLabel', { timeout: 10000 }).should('be.visible');
    cy.wait(200)
    cy.get('#loginusername', { timeout: 10000 }).should('be.visible');
    cy.get('#loginusername').type(user_name)
    cy.get('#loginpassword', { timeout: 10000 }).should('be.visible');
    cy.get('#loginpassword').type('Password')
    cy.get('button[type="button"]').contains('Log in').click()
    cy.get('#logInModalLabel', { timeout: 10000 }).should('not.be.visible');
    cy.get('tr[class=success]', { timeout: 10000 }).should('be.visible');
    cy.get('td').contains('Sony vaio i5')

})



