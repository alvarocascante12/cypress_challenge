import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('Api Testing', () =>{
    // Cypress.config('baseUrl','https://petstore.swagger.io/')
    Then('POST',()=>{
        cy.request({
            method: 'POST',
            url: 'http://petstore.swagger.io/#/pet/addPet',
            failOnStatusCode: false,
            body: {
                "id": 350,
                "category": {
                  "id": 0,
                  "name": "wolf"
                },
                "name": "wolf",
                "photoUrls": [
                  "foto"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "wolf"
                  }
                ],
                "status": "available"
              }
        }).then((response) => {
            // cy.log(response.body)
            expect(response.status).to.eq(200)
        });

    })

    Then('GET',()=>{
        cy.request('GET','https://petstore.swagger.io/#/pet/getPetById/350').then((response)=> {
        // cy.log(response.body)
        expect(response.status).to.eq(200)
      });
      
    })
    Then('PUT',()=>{
        cy.request({
            method: 'PUT',
            url: 'http://petstore.swagger.io/#/pet/updatePet',
            failOnStatusCode: false,
            body: {
              "id": 350,
              "category": {
                "id": 0,
                "name": "leon"
              },
              "name": "leon",
              "photoUrls": [
                "foto"
              ],
              "tags": [
                {
                  "id": 0,
                  "name": "leon"
                }
              ],
              "status": "available"
              }
        }).then((response) => {
            // cy.log(response.body)
            expect(response.status).to.eq(200)
        });

    })

})


