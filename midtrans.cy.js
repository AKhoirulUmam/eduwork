describe("Berhasil checkout", function () {
  it("Berhasil checkout dengan virtual account", function () {
    cy.visit("https://demo.midtrans.com/");

    cy.contains("BUY NOW").click();

     // Input Name
     cy.get('input[value="Budi"]').clear()
     cy.get('input[value="Budi"]').type('Umam')
      // Input Email
     cy.get('input[value="budi@utomo.com"]').clear()
     cy.get('input[value="budi@utomo.com"]').type('Umam0800@gmail.com')
        // Input Phone Number
     cy.get('input[value="081808466410"]').clear()
     cy.get('input[value="081808466410"]').type('081285965118')
        // Input City
     cy.get('input[value="Jakarta"]').clear()
     cy.get('input[value="Jakarta"]').type('Bogor')
        // Input Address
     cy.get('textarea').clear()
     cy.get('textarea').type('Babakanmadang, Bogor')
        // Input Postal Code
     cy.get('input[value="10220"]').clear()
     cy.get('input[value="10220"]').type('16516')

    cy.get(".cart-checkout").click();

    cy.iframe("#snap-midtrans")
      .find("a[href='#/bank-transfer']")
      .should("be.visible")
      .click();

    cy.iframe("#snap-midtrans")
      .find("a[href='#/bank-transfer/bca-va']")
      .should("be.visible")
      .click();

    cy.iframe("#snap-midtrans").find("button").click();
  });
});
