describe('Browser action',()=>{

    it('should load books website',()=>{

        cy.visit('https://books.toscrape.com/index.html');

        cy.url().should('include','index.html');

        cy.contains('Travel').click();
    });
});
