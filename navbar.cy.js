describe('Navbar Test', function(){

    it('should display online bankingcontent', function(){
    
       cy.visit('http://zero.webappsecurity.com/index.html')

       cy.contains('Online Banking').click();

       cy.url().should('include','online-banking.html');

       cy.get('h1').should('be.visible');

       cy.contains('Account Summary').click();

       cy.get("#user_login").type("username");
  
       cy.get("#user_password").type("password");
  
       cy.get("input[name=submit]").click();



});
});

