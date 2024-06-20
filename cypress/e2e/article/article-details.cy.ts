let articleId: string | number;
describe('Tests article details page', () => {
  beforeEach(() => {
    cy.login();
    cy.createTestArticle().then(article => {
      cy.log(article.id);
      articleId = article.id;
      cy.visit(`articles/${articleId}`);
    });
  });
  afterEach(() => {
    cy.removeTestArticle(articleId);
  });
  it('create article and visit', () => {
    cy.fixture('article-details').then(data => {
      cy.intercept('GET', '**/articles/*', data);
    });
    cy.getDataTestid('ArticleDetailsPage').should('exist');
  });
  it('rate and feedback the article', () => {
    cy.getDataTestid('RatingCard').should('exist').scrollIntoView();
    cy.rating('4', 'test feedback');
  });
  it('comment the article --> delete comment', () => {
    const commentText = 'test comment';
    cy.getDataTestid('AddComment').should('exist').scrollIntoView();
    cy.wait(2000);
    cy.addComment(commentText);
    cy.getDataTestid('CommentCard.Text').should('contain', commentText);
    cy.deleteComment(commentText);
  });
});
