import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o Portal Tricents', () => {
    cy.visit('http://sampleapp.tricentis.com/101/app.php');

})

When('acesso o Automobile', () => {
    cy.acessarAutomobile();
});

Then('preencho as campos da Enter Vehicle Data', () => {
    cy.preencherCampos()
})  

And('clico em next', () => {
    cy.clickNextButton()
})