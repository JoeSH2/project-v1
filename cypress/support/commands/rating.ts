export const rating = (rate: string, feedback?: string) => {
  cy.getDataTestid(`StarsRating.${rate}`).click();
  if (feedback) {
    cy.getDataTestid('RatingCard.Input').type(feedback);
    cy.getDataTestid('RatingCard.Send').click();
  }
};

declare global {
  namespace Cypress {
    interface Chainable {
      rating(rate: string, feedback?: string): Chainable<void>;
    }
  }
}
