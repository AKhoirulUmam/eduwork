describe("login with fixtures data",function(){

  it('Should try to login',function() {

      cy.visit("https://www.saucedemo.com/");
      cy.fixture("user").then(data => {
        cy.get("#user-name").type(data.daftar_user.standar.username);
        cy.get("#password").type(data.daftar_user.standar.password);
    
        cy.get("#login-button").click();
    
        cy.url().should("include", "inventory.html");
      })
    })
  })