/// <reference types="cypress" />


describe('Testing Wikipedia', () => {
  
  it('I can search for content', () => {
    cy.fixture('ui//homepage_spec.json').as('data');    
      cy.visit('https://www.wikipedia.org');
      cy.get('@data').then(data => {
        cy.get("input[type='search']").type(data.text_to_search);
        cy.get("button[type='submit']").click();
        cy.contains(data.expected_value1);
        cy.contains(data.expected_value2);
      });
    });
  })