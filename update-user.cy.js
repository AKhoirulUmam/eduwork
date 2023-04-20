it.only('Validate Content', () => {
    
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')

    cy.get('@pokemon').its('body').should('include', {name: "ditto"})
});

'{"abilities":[{"ability": {"name": "limber","url": "https://pokeapi.co/api/v2/ability/7/"}}]}'

        expect(response.body.name).to.eq(ability.name)

    

