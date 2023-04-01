/// <reference types="cypress" />

describe('Working with Inputs',()=>{
    it("visit the website",()=>{
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.url().should('include','login.html')

    it('should fill login',()=>{
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
}); 

    it('should fill password',()=>{
    cy.get('input"user_password"').clear()
    cy.get('input"user_password"').type('password')     
});

   
})
   })
    