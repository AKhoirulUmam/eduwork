/// <reference types="cypress" />

describe('Searchbox Test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com')
    });

    it('Should type into searchbox and submit',()=>{
        cy.get('#searchTerm').type('Online Banking{enter}')
    });

    it('Should type into searchbox and submit',()=>{
        cy.get('#searchTerm').type('Online Statements{enter}')
    });

});