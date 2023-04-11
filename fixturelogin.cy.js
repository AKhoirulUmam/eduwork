describe('login with fixtures data',function(){

    it('Should try to login',function(){

        cy.visit("https://www.saucedemo.com/");

        cy.fixture("user").then(user=>{
            const username=user.standard_user
            const password=user.secret_sauce

            cy.get("#user-name").type("standard_user");
    
            cy.get("#password").type("secret_sauce");

            cy.get("#login-button").click();

            cy.url().should("include", "inventory.html");

           

        })
    })
})