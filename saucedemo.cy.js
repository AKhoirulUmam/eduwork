describe("Automation Test Login", function () {

  it("Berhasil login menggunakan akun standard_user", function () {
   
    cy.visit("https://www.saucedemo.com/");

    cy.get("#user-name").type("standard_user");
    
    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.url().should("include", "inventory.html");

    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();

    cy.get("#shopping_cart_container").click();

    cy.get("#checkout").click();


   
   })
   
  });

