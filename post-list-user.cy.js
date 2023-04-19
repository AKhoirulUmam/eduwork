it('Add a new user', () => {
    const requestBody={
        name:"Umam",
        job:"programer"
    };
    cy.request('POST', 'https:reqres.in/api/users', requestBody).then((response) => {
        
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(requestBody.name);
        expect(response.body.job).to.eq(requestBody.job);
    })
})
