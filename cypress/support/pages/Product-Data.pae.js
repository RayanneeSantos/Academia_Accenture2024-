const INPUT_START_DATE = '#startdate'
const SELECT_INSURANCE = '#insurancesum'
const SELECT_MERIT_RATING = '#meritrating'
const SELECT_DAMAGE_INSURANCE = '#damageinsurance'
const INPUT_OPTIONAL_PRODUCT =  '.idealforms-field-checkbox'
const SELECT_COURTES_CAR = '#courtesycar'
const BTN_CLICK = '#nextselectpriceoption'

Cypress.Commands.add('preencherProductData', () => {
    cy.get(INPUT_START_DATE).should('be.visible').type('01/21/2029')
    cy.get(SELECT_INSURANCE).should('be.visible').select(2)
    cy.get(SELECT_MERIT_RATING).should('be.visible').select(2)
    cy.get(SELECT_DAMAGE_INSURANCE).should('be.visible').select(2)
    cy.get(INPUT_OPTIONAL_PRODUCT).should('be.visible').contains('Euro Protection').click({ force: true });
    cy.get(SELECT_COURTES_CAR).should('be.visible').select(2)
    
})    

Cypress.Commands.add('seguinte', () => {
    cy.get(BTN_CLICK).should('be.visible').click({force: true })
})