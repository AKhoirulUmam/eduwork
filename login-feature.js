const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
   cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I submit login', () => {
   cy.get('#user_login').type('username')
   cy.get('#user_password').type('password')
   cy.contains('Sign in').click()
})

Then('I should see homepage and search to data', () => {
    cy.get('#searchTerm').click()
})


