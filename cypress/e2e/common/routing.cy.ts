describe('Routing tests', () => {
  describe('User not authorized', () => {
    it('Visit Main page', () => {
      cy.visit('/');
      cy.getDataTestid('MainPage').should('exist');
    });
    it('visit "Profile" page', () => {
      cy.visit('/profiles/1');
      cy.getDataTestid('MainPage').should('exist');
    });
    it('visit Forbidden page', () => {
      cy.visit('/asdasdasdasda');
      cy.getDataTestid('PageNotFound').should('exist');
    });
  });
  describe('User is authorized', () => {
    beforeEach(() => cy.login());
    it('visit Profile page', () => {
      cy.login().then(data => cy.visit(`/profiles/${data.id}`));
      cy.getDataTestid('ProfilePage').should('exist');
    });
    it('visit Articles page', () => {
      cy.visit('/articles');
      cy.getDataTestid('ArticlesPage').should('exist');
    });
    it('visit Forbidden page', () => {
      cy.visit('/asdasdasdasda');
      cy.getDataTestid('PageNotFound').should('exist');
    });
  });
});
