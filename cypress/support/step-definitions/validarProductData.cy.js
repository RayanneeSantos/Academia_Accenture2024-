import { Given, And, Then, } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o Portal Tricents', () => {
    cy.visit('http://sampleapp.tricentis.com/101/app.php');

})

And('sou redirecionado para preencher os campos Product Data', () => {
    cy.preencherProductData()
})

Then('clico em seguinte', () => {
    cy.seguinte()
})