export const profileUpdate = (firstname: string, lastname: string) => {
  cy.getDataTestid('EditorProfileHeader.EditBtn').click();
  cy.getDataTestid('ProfileList.firstname').clear().type(firstname);
  cy.getDataTestid('ProfileList.lastname').clear().type(lastname);
  cy.getDataTestid('EditorProfileHeader.SaveBtn').click();
};

export const resetProfile = (profileId: string) =>
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'customTrue' },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 30,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'testuser',
      avatar:
        'https://sun6-21.userapi.com/s/v1/if2/my0bOeQoFkmaRFWlsJUaaYNViN3ih6M2bYnOWNF3j-Cm0lA5E26DS0Ypm7h_nCJtc1a17zWfNuz8n541Ge36Iou7.jpg?size=1121x1121&quality=96&crop=39,39,1121,1121&ava=1',
    },
  });

declare global {
  namespace Cypress {
    interface Chainable {
      profileUpdate(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
