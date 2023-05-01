describe("POST /api/users",function(){
    it("Berhasil post user", function(){
        const requestBody={
           username:"standard_user",password:"secret_sauce"};

        cy.request("POST","https://auth-eduwork.free.beeceptor.com/login",requestBody).then(
            (response)=>{
                expect(response.status).to.eq(200);

                expect(response.body. username).to.eq(requestBody.standard_user);
                expect(response.body.password).to.eq(requestBody.secret_sauce);
            }
        )
    })
})
