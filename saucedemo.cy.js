describe("Automation Test Login", function () {
    it("Berhasil login menggunakan akun standard_user", function () {
      cy.visit("https://www.saucedemo.com/");
  
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
  
      cy.get("#login-button").click();
  
      cy.url().should("include", "inventory.html");

    });
    });

