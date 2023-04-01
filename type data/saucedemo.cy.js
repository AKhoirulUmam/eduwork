// 1. Berhasil login menggunakan akun standard_user
// 2. Gagal login menggunakan akun locked_out_user

describe("Automation Test Login", function () {
    it("Berhasil login menggunakan akun standard_user", function () {
      cy.visit("https://www.saucedemo.com/");
  
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
  
      cy.get("#login-button").click();
  
      cy.url().should("include", "inventory.html");
    });
  
    it("Gagal login menggunakan akun locked_out_user", function () {
      cy.visit("https://www.saucedemo.com/");
  
      cy.get("#user-name").type("locked_out_user");
      cy.get("#password").type("secret_sauce");
  
      cy.get("#login-button").click();
  
      cy.get(
        "#login_button_container > div > form > div.error-message-container.error > h3"
      ).should("include", "Sorry, this user has been locked out.");
    });
  });