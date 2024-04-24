describe('Tests article list page', () => {
  it('Loading -> skeleton -> articles cards', () => {
    cy.login();
    cy.visit('/articles');
    cy.getDataTestid('ArticleList').should('exist');
    cy.getDataTestid('ArticleCard').should('have.length.greaterThan', 3);
  });
});
