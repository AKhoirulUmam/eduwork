import LoginPage from './login.page.js';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
   LoginPage.visit();
})

When('I submit login', () => {
   LoginPage.fillUsername('username');
   LoginPage.fillPassword('password');
   LoginPage.signIn();
})

Then('I should see homepage', () => {
    cy.get('#searchTerm').click()

})

