import { maketext } from "../shared/text_generator.js"


const text = maketext(20)
var myNumberofList={}

export function clickTextsbox() {
    cy.get('[name="text"]').type(text)
}

export function clickbuttonCreateItem() {
    cy.contains('Create Item').click()
}

export function clickbuttonEdit() {
    cy.wait(200)
    cy.get('li').find('button').first().click()
}

export function clickbuttonUpdateItem() {
    cy.contains('Update Item').click()
}

export function clickSelectFile() {
    cy.get('#inputImage').click()
}

export function validatePopat() {
    var alerted = false;
    cy.on('window:alert', msg => alerted = msg);
    cy.contains('Create Item').click()
    .then( () => expect(alerted).to.match(/You must to select an image/))
}

export function validateCreateItem() {
    cy.get('[class="media-list ng-pristine ng-untouched ng-valid ng-isolate-scope ui-sortable"]').contains(text)
}

export function maxLongCharacters() {
    var max_long = maketext(300)
    cy.get('[name="text"]').type(max_long)
}

export function maxLongExcessCharacters() {
    var max_long = maketext(100)
    cy.get('[name="text"]').type(max_long)
}

export function checkbuttonCreateItem() {
    cy.contains('Create Item').should('be.visible')
}


export function clickbuttonDelete() {
    cy.get('li').find('button').last().click()
}

export function confirmDelete() {
    cy.contains('Yes, delete it!').click()
}

export function saveListofItems() {
    cy.get('[class="ng-binding"]').invoke('text').then((text) => {
        myNumberofList.save = text.trim()
    });
}

export function saveTextDescription() {
    cy.get('[class="story ng-binding"]').invoke('text').then((text) => {
        var text_description={}
        text_description.save = text.trim()
    });
}

export function validateTextUpdateDescription() {
    cy.get('[class="story ng-binding"]').invoke('text').then((text) => {
        expect(myNumberofList.save).to.not.equal(text)
    });
}

export function validateDeleteItem() {
    cy.reload()
    cy.get('[class="ng-binding"]').invoke('text').then((text) => {
        var string_to_numb = +myNumberofList.save.match(/\d+/)[0]
        myNumberofList.save2 = text.trim()
        var string_to_numb_2= +myNumberofList.save2.match(/\d+/)[0]
        expect(string_to_numb -1).equal(string_to_numb_2)
    });

}

export function checkList(value) {
    cy.get('[class="media-left"]').contains(value).should('be.visible')

}

export function validateUpdateImage(image) {
    cy.get('[src="assets/images/'+image+'"]').should('be.visible')
}
