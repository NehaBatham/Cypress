describe('Testing Wikipedia', () => {
    it('A user can search for a word', () => {
      cy.visit('https://wikipedia.org');
      cy.get('.other-project-link')
        .eq(2)
        .click();
      cy.url().should('equal', 'https://www.wiktionary.org/');
      cy.get('#searchInput').type('Svelte{enter}');
      cy.contains('Etymology');
      cy.contains('svelte');
    });
  });