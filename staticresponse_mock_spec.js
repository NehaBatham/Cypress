
describe('All things Fixtures', () => {

    const requestUrl = Cypress.env('api_baseUrl') +'/users';

    beforeEach(() => cy.visit(Cypress.env('api_url')));

   /* it('should perform the get operation on click of Send Request button', () => {
       cy.contains('Send Request').click();
       cy.wait(5000);
       cy.get('#rsp_body').should('have.length', 1);
    });*/

    it('should retrieve a fixture of data static response via cy.intercept()', () => {
        cy.intercept(requestUrl, {
            fixture: 'api//response13thMay.json' 
        });
        cy.contains('Send Request').click();
    });
   
   
});