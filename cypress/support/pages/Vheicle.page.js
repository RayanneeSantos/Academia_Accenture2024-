const BTN_AUTOMOBILE = '#nav_automobile'
const SELECT_Make = '#make'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const INPUT_DATE_OF_MANUFACTURE = '#dateofmanufacture'
const SELECT_NUMBER_OF_SEATS = '#numberofseats'
const SELECT_FUEL_TYPE = '#fuel'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_LICENCE_PLATE_NUMBER = '#licenseplatenumber'
const INPUT_ANNUAL_MILAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'


Cypress.Commands.add('acessarAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).should('be.visible').click()
})


Cypress.Commands.add('preencherCampos', () => {
    cy.get(SELECT_Make).should('be.visible').select('Renault')
    cy.get(INPUT_ENGINE_PERFORMANCE).should('be.visible').type('80')
    cy.get(INPUT_DATE_OF_MANUFACTURE).should('be.visible').type('01/12/2020')
    cy.get(SELECT_NUMBER_OF_SEATS).should('be.visible').select('5')
    cy.get(SELECT_FUEL_TYPE).should('be.visible').select('Petrol')
    cy.get(INPUT_LIST_PRICE).should('be.visible').type('45000')
    cy.get(INPUT_LICENCE_PLATE_NUMBER).should('be.visible').type('Q9W00')
    cy.get(INPUT_ANNUAL_MILAGE).should('be.visible').type('10000')
})

Cypress.Commands.add('clickNextButton', () => {
    cy.get(BTN_NEXT).should('be.visible').click();
})
