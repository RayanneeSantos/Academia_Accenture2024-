const INPUT_FIRSTNAME = '#firstname'
const INPUT_LASTNAME = '#lastname'
const INPUT_DATE_OF_BIRTH = '#birthdate'
const SELECT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const SELECT_OCUPATION = '#occupation'
const INPUT_HOBBIES = '.group'
const BTN_NEXT = '#nextenterproductdata'

Cypress.Commands.add('inserirCampos', () => {
    cy.get(INPUT_FIRSTNAME).should('be.visible').type('Pedro')
    cy.get(INPUT_LASTNAME).should('be.visible').type('Santos')
    cy.get(INPUT_DATE_OF_BIRTH).should('be.visible').type('11/21/1988')
    cy.get(SELECT_COUNTRY).should('be.visible').select('Brazil')
    cy.get(INPUT_ZIP_CODE).should('be.visible').type(Cypress.env('zipcode'), {log:false})
    cy.get(SELECT_OCUPATION).should('be.visible').select('Farmer')
    cy.get('input[type="checkbox"]').eq(2).should('be.visible').check({ force: true })
})


Cypress.Commands.add('buttonProximo', () => {
    cy.get(BTN_NEXT).should('be.visible').click({ force: true })
})
