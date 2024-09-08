import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o Portal Tricents', () => {
    cy.visit('http://sampleapp.tricentis.com/101/app.php');

});

When('preencho os campos da Insuret Data', () => {
    cy.inserirCampos()
})

Then('clico em proximo', () => {
    cy.buttonProximo()
})
