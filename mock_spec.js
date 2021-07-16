

describe('All things Fixtures', () => {

    const requestUrl = Cypress.env('api_baseUrl') +'/users';

    beforeEach(() => cy.visit(Cypress.env('api_url')));

    it('should perform the get operation on click of Send Request button', () => {
       cy.contains('Send Request').click();
       cy.wait(5000);
       cy.get('#rsp_body').should('have.length', 1);
    });

    it('should retrieve a fixture of data static response via cy.intercept()', () => {
        cy.intercept(requestUrl, {
            fixture: 'api//response.json' 
        });
        cy.contains('Send Request').click();
    });
   
    it('should dynamically stub data via cy.intercept()', () => {
        cy.intercept(
        {
          method: 'GET',
          url:  requestUrl
        }, 
        {
            statusCode:201,
            body:{
                "code": 201,
                "meta": {
                  "pagination": {
                    "total": 1386,
                    "pages": 70,
                    "page": 1,
                    "limit": 20
                  }
                },
                "data": [
                  {
                    "id": 1,
                    "name": "Gorakhnath Varman DVM",
                    "email": "gorakhnath_dvm_varman@kessler.biz",
                    "gender": "Male",
                    "status": "Active",
                    "created_at": "2021-05-11T03:50:03.289+05:30",
                    "updated_at": "2021-05-11T03:50:03.289+05:30"
                  }, 
                ]
            }
        }).as("dummy");
        cy.contains('Send Request').click();
      
    });

});

