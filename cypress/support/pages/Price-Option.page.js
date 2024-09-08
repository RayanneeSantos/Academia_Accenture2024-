const INPUT_SELECT_OPTION = '#pricesum'
const BUTTON_VIEW = '#viewquote'

Cypress.Commands.add('selecionarOpcao', () => {
    cy.get('input[type="radio"]').eq(3).should('be.visible') .check({ force: true })
})

Cypress.Commands.add('VisualizarView', () => {
    cy.get(BUTTON_VIEW).should('be.visible').click()
    
})

Cypress.Commands.add ('validarCotacaoSucesso',() => {
    cy.get('.quote-cell').should('be.visible').and('contain', 'View Quote');
})
