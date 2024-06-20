describe('Tests article list page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('/articles/');
    });
  });
  it('Loading -> skeleton -> articles cards', () => {
    cy.fixture('articles').then(data => {
      cy.intercept('GET', '**/articles?*', data);
    });
    cy.getDataTestid('ArticleList').should('exist');
    cy.getDataTestid('ArticleCard').should('have.length.greaterThan', 3);
  });
});
