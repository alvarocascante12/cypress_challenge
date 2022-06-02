import { settingsView } from "./settings_view.js"

export function suiteSetup(device) {
    if(device == 'desktop'){
        const device_view = settingsView(device)
        cy.viewport(device_view[0], device_view[1])
        cy.visit(Cypress.env('url'))
    }else{
        cy.viewport(device)
        cy.visit(Cypress.env('url'))
    }
}
