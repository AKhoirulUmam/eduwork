describe("login with fixtures data",function(){

  it('Should try to login',function() {

      cy.visit("https://www.saucedemo.com/");
      cy.fixture("user").then(data => {
        cy.login(
          data.daftar_user.standard.username,
          data.daftar_user.standard.password,
        );
    
        cy.url().should("include", "inventory.html");
      })
    })
  })
