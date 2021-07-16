describe('Post API', () => {

    it('My FirstTest case',function() {
        cy.request('GET',  Cypress.env('api_baseUrl')+ '/posts', {
            }).then(function(response)
            {   
              expect(response.status).to.eq(200);
            })
    });
  
    it('should add a new post successfully', () => {
      cy.request({
        method: 'POST',
        url: Cypress.env('api_baseUrl')+ '/posts?userId=1',
        body: {
          userId: 1,
          title: 'foo',
          body: 'var',
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  
    it('should delete a post successfully', () => {
      cy.request({ method: 'DELETE', url:Cypress.env('api_baseUrl')+ '/posts/1' })
        .its('status')
        .should('be.equal', 200);
    });
  });