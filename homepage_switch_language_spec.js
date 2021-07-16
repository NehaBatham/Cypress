import HomePage from '../../support/pages/HomePage'
const homePage=new HomePage();
describe('Testing Wikipedia', () => {
    it('A user can switch languages', () => {
      cy.fixture('ui//homepage_spec.json').as('data');
      cy.visit(Cypress.env('url'));
      cy.contains('Read Wikipedia in your language');
      homePage.getLanguageList().click();
      cy.selectLanguage('Yorùbá');
      cy.get('@data').then(data => {
      cy.url().should(
        'equal',
        data.expected_url,
      );
      });
      cy.contains('Ẹ kú àbọ̀');
   
    /* cy.selectLanguage('Italiano');
      cy.get('@data').then(data => {
      cy.url().should(
        'equal',
        data.expected_url,
      );
      });
      cy.contains('Ẹ kú àbọ̀');*/
    
    });
  });