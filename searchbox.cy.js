describe('Searchbox Test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com')
    });

    it('Should type into searchbox and submit',()=>{
        cy.get('#searchTerm').type('Online Banking{enter}')

        cy.get('h2').contains('Search Result')

        cy.contains('Online Banking').click();

        cy.get('#searchTerm').type('Online Statements{enter}')

        cy.get('h2').contains('Search Result')
    });

});

