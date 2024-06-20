import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import { User } from '../../../src/entity/User';
import { selectDataTestId } from '../../helpers/selectDataTestId';

export const getDataTestid = (testid: string) => {
  cy.get(selectDataTestId(testid));
};

export const login = (username: string = 'testuser', password: string = '123') =>
  cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/login`,
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
      return body;
    });

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>;
      getDataTestid(testid: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
