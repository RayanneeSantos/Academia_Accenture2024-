import { Given, And, When, Then, } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o Portal Tricents', () => {
    cy.visit('http://sampleapp.tricentis.com/101/app.php');

})


And('acesso o Automobile', () => {
    cy.acessarAutomobile();
})

And('preencho as campos da Enter Vehicle Data', () => {
    cy.preencherCampos()
})  

And('clico em next', () => {
    cy.clickNextButton()
})

When('preencho os campos da Insuret Data', () => {
    cy.inserirCampos()
})


And('clico em next', () => {
    cy.buttonNext()
})

And('sou redirecionado para preencer os campos Product Data', () => {
    cy.preencherProductData()
})

Then('finalizo na aba Price Option', () => {
    cy.selecionarOpcao()
})

And('realizo o download', () => {
    cy.baixar()
})