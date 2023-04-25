it.only('Validate Content', () => {
    
    cy.request("https://pokeapi.co/api/v2/ability/7/").as('limber')

    cy.get('@limber').its('body').should('include', {name: "limber"})
    
});




       

    

