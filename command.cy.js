describe('Custom Commands',function(){

  it('Should load login page',function(){

      cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html');
      
      cy.login('username','password');
    
      cy.contains('Pay Bills')


      });
    });
 
