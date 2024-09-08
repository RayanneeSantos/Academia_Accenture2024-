const INPUT_SELECT_OPTION = '#pricesum'
const BUTTON_DAOWLOAD = '#viewquote'

Cypress.Commands.add('selecionarOpcao', () => {
    cy.get('input[type="radio"]').eq(3).should('be.visible') .check({ force: true })
})

Cypress.Commands.add('view', () => {
    cy.get(BUTTON_VIEW).should('be.visible').click()
})
