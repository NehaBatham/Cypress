
const requestUrl = Cypress.env('api_baseUrl') +'/users';

describe('Creating local response data for mocking response.',()=>{
    it('should make a request and then write the response', () => {
        cy.request(requestUrl).then(response => {
            cy.writeFile('cypress/fixtures/api/response.json', response.body)
        });
    
        cy.fixture('api//response.json').then(response => {
            expect(response.data[0].id).to.be.equal(1);
        });
    });
});


