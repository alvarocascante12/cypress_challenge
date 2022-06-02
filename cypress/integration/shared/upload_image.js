export function uploadImage(image) {
    const imagefile = image
    cy.get('[name="imageSrc"]').attachFile(imagefile)
}
