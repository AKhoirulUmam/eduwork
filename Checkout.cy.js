describe("Berhasil checkout", function () {
  it("Berhasil checkout dengan virtual account", function () {
    cy.visit("https://demo.midtrans.com/");

    cy.contains("BUY NOW").click();

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
