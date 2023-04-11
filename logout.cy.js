describe("logout", function(){

    it("Berhasil logout dengan benar", function(){
  
      cy.visit("http://zero.webappsecurity.com/login.html");
  
      cy.get("#user_login").type("username");
  
      cy.get("#user_password").type("password");
  
      cy.get("input[name=submit]").click();

      cy.contains('username').click();
        
      cy.get("#logout_link").click();
        
      cy.get("strong").should("contains.text","Home");
      });
    
});
    
