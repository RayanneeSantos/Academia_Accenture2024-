const BTN_AUTOMOBILE = '#nav_automobile'
const SELECTOR_Make = '#make'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const INPUT_DATE_OF_MANUFACTURE = '#dateofmanufacture'
const SELECTOR_NUMBER_OF_SEATS = '#numberofseats'
const SELECTOR_FUEL_TYPE = '#fuel'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_LICENCE_PLATE_NUMBER = '#licenseplatenumber'
const INPUT_ANNUAL_MILAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'


Cypress.Commands.add('acessarAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).should('be.visible').click()
});


Cypress.Commands.add('preencherCampos', () => {
    cy.get(SELECTOR_Make).should('be.visible').select('Renault')
    cy.get(INPUT_ENGINE_PERFORMANCE).should('be.visible').type(80)
    cy.get(INPUT_DATE_OF_MANUFACTURE).should('be.visible').type('01/12/2020')
    cy.get(SELECTOR_NUMBER_OF_SEATS).should('be.visible').select('5')
    cy.get(SELECTOR_FUEL_TYPE).should('be.visible').select('Petrol')
    cy.get(INPUT_LIST_PRICE).should('be.visible').type(45000)
    cy.get(INPUT_LICENCE_PLATE_NUMBER).should('be.visible').type('Q9W00')
    cy.get(INPUT_ANNUAL_MILAGE).should('be.visible').type(10000)
});

Cypress.Commands.add('clickNextButton', () => {
    cy.get(BTN_NEXT).click();
});


const INPUT_FIRSTNAME = '#firstname'
const INPUT_LASTNAME = '#lastname'
const INPUT_DATE_OF_BIRTH = '#birthdate'
const SELECTOR_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const SELECTOR_OCUPATION = '#occupation'
const INPUT_HOBBIES = '.group'
const BTB_NEXT = '#nextenterproductdata'

Cypress.Commands.add('inserirCampos', () => {
    cy.get(INPUT_FIRSTNAME).should('be.visible').type('Pedro')
    cy.get(INPUT_LASTNAME).should('be.visible').type('Santos')
    cy.get(INPUT_DATE_OF_BIRTH).should('be.visible').type('11/21/1988')
    cy.get(SELECTOR_COUNTRY).should('be.visible').select('Brazil')
    cy.get(INPUT_ZIP_CODE).should('be.visible').type('3250090')
    cy.get(SELECTOR_OCUPATION).should('be.visible').select('Farmer')
    cy.get('input[type="checkbox"]').eq(2).should('be.visible').check({ force: true })
});


Cypress.Commands.add('clickNextButton', () => {
    cy.get(BTB_NEXT).click({ force: true })
})


const INPUT_START_DATE = '#startdate'
const SELECTOR_INSURANCE = '#insurancesum'
const SELECTOR_MERIT_RATING = '#meritrating'
const SELECTOR_DAMAGE_INSCURE = '#damageinsurance'
const INPUT_OPTIONAL_PRODUCT =  '.idealforms-field-checkbox'
const SELECTOR_COURTES_CAR = '#courtesycar'
const BTN_CLICK = '#nextselectpriceoption'

Cypress.Commands.add('preencherProductData', () => {
    cy.get(INPUT_START_DATE).type('01/21/2029')
    cy.get(SELECTOR_INSURANCE).select(2)
    cy.get(SELECTOR_MERIT_RATING).select(2)
    cy.get(SELECTOR_DAMAGE_INSCURE).select(2)
    cy.get(INPUT_OPTIONAL_PRODUCT).contains('Euro Protection').click({ force: true });
    cy.get(SELECTOR_COURTES_CAR).select(2)
    cy.get(BTN_CLICK).click({force: true })
})    

const INPUT_SELECT_OPTION = '#pricesum'

Cypress.Commands.add('selecionarOpcao', () => {
    cy.get('input[type="radio"]').eq(3).should('be.visible') .check({ force: true })
});

const BUTTON_DAOWLOAD = '#viewquote'

Cypress.Commands.add('baixar', () => {
    cy.get(BUTTON_DAOWLOAD).should('be.visible').click()
});
