it.only('Validate Header', () => {

    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')

    cy.get('@pokemon').its('headers').its('content-type')

    .should('include', 'application/json; charset=utf-8')
});
     '{"abilities":[{"ability":{"name":"limber","url":"https://pokeapi.co/api/v2/type/1/"}}],"weight":40}'

    '{"abilities":[{"ability": {"name": "limber","url": "https://pokeapi.co/api/v2/ability/7/"}}]}'