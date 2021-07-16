describe('Modify HTTP request header, body, and url',()=>{
    const requestUrl = 'https://gorest.co.in/chandamama-stories';

    it('should modify request.', ()=>{
        cy.visit(requestUrl);
        cy.wait(5000);
        cy.intercept('GET', requestUrl+"/hindi",
        (req)=>{
            req.url = requestUrl +"/english"
            req.headers['x-custom-headers'] = 'added by cy.intercept'
        }
        ).as("dummy");
        
        cy.get(".row>:nth-child(2)>.card>.card-body>h3.text-center>.stretched-link").click();
        cy.log("Click preference for Hindi language!");
     cy.wait('@dummy')
     .its('request.headers')
     .should('have.property', 'x-custom-headers', 'added by cy.intercept')
    })
})