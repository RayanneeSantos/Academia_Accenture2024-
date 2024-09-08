import { Given, Then,  And, } from 'cypress-cucumber-preprocessor/steps'


Given('que acesso o Portal Tricents', () => {
    cy.visit('http://sampleapp.tricentis.com/101/app.php');

})

Then('finalizo na aba Price Option', () => {
    cy.selecionarOpcao()
})

And('realizo o download', () => {
    cy.view()
})