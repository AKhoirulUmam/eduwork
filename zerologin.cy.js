describe("login", function(){

    it("Berhasil login dengan kredensial yang benar", function(){
  
      cy.visit("http://zero.webappsecurity.com/login.html");
  
      cy.get("#user_login").type("username");
  
      cy.get("#user_password").type("password");
  
      cy.get("input[name=submit]").click();
  
      cy.url().should("include","account-summary");
  
    })
  })