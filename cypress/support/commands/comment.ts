export const addComment = (comment: string) => {
  cy.getDataTestid('AddComment.Input').type(comment);
  cy.getDataTestid('AddComment.Button').click();
};

export const deleteComment = (comment: string) => {
  cy.getDataTestid('CommentCard.Text').should('contain', comment);
  cy.getDataTestid('CommentCard.DeleteButton').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(comment: string): Chainable<void>;
      deleteComment(comment: string): Chainable<void>;
    }
  }
}
