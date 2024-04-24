let profileId: string;
describe('Profile tests', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then(data => {
      profileId = data.id;
      cy.visit(`/profiles/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('have value "firstname" and "lastname"', () => {
    cy.getDataTestid('EditorProfileHeader.EditBtn').click();
    cy.getDataTestid('ProfileList.firstname').should('have.value', 'test');
    cy.getDataTestid('ProfileList.lastname').should('have.value', 'user');
  });
  it('Update profile', () => {
    const newFirstname = 'test__test';
    const newLastname = 'user__test';
    cy.profileUpdate(newFirstname, newLastname);
    cy.getDataTestid('ProfileList.firstname').should('have.value', newFirstname);
    cy.getDataTestid('ProfileList.lastname').should('have.value', newLastname);
  });
});
