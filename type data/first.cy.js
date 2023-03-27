/// <reference types="cypress" />

describe('my first test',()=>{
    it('clicking "type"shows the right headings',()=>{
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains("type").click()

        //should be on a new URL which includes '/command/actions'

        //get an input, type into it and verify that the value has been updated
        cy.get('action-email')
          .type('fake@gmail.com')
          .should('have.value','fake@gmail.com')
    })
})