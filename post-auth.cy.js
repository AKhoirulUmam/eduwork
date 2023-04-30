describe("POST /api/users",function(){
    it("Berhasil create user", function(){
        const requestBody={
           username:"standard_user",password:"secret_sauce"};

        cy.request("POST","https://reqres.in/api/users",requestBody).then(
            (response)=>{
                expect(response.status).to.eq(201);

                expect(response.body.username).to.eq(requestBody.username);
                expect(response.body.password).to.eq(requestBody.password);
            }
        )
    })
})
