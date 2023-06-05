describe('Get Users post', () => {
    it('berhasil get data users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/16/posts',
          }).as('users')
          cy.get('@users').its('status').should('equal', 200)
    });
 });
 
 describe('Get Users comment', () => {
    it('berhasil get data users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/posts/16/comments',
          }).as('users')
          cy.get('@users').its('status').should('equal', 200)
    });
 });

describe('Get Users todos', () => {
    it('berhasil get data users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/16/todos',
          }).as('users')
          cy.get('@users').its('status').should('equal', 200)
    });
 });
 


 //https://gorest.co.in/public/v2/graphql
 
  describe('POST user', () => {
    it('Add a new user', () => {
    const requestBody={
        name:"Umam",
        job:"programer"
    };
    cy.request('POST', 'https://gorest.co.in/public/v2/graphql', requestBody).then((response) => {
        
        expect(response.status).to.eq(200);
        expect(response.body.name).to.equal(requestBody.Umam);
        expect(response.body.job).to.equal(requestBody.programer);
    })
})
 });

  describe('Get Users details', () => {
    it('berhasil get data users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/1576',
          }).as('users')
          cy.get('@users').its('status').should('equal', 200)
    });
 });

 describe('Delete Users ', () => {
    it.only('berhasil Delete user', () => {
       cy.request('DELETE', 'https:reqres.in/api/users/2').then((response) => {
           expect(response.status).equal(204)
       })
   })
})

  describe('Update user', () => {
    it('Update new user', () => {
    const requestBody={
        name:"Umam",
        job:"QualityAssurance"
    };
    cy.request('PUT', 'https://reqres.in/api/users/1', requestBody).then((response) => {
        
        expect(response.status).to.eq(200);
       expect(response.body.name).to.equal(requestBody.name);
        expect(response.body.job).to.equal(requestBody.job);
    })
})
 });
