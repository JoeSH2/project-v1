import { Article } from '../../../src/entity/Article';

const testingArticle = {
  userId: '4',
  title: 'TEST ARTICLE',
  subtitle: 'Тестовая статья',
  img: 'https://i.pinimg.com/originals/e1/50/f8/e150f8c1d859436170f0b1373fdda2cc.jpg',
  views: 1111,
  createdAt: '11.11.1111',
  type: ['IT'],
  blocks: [],
};

export const createTestArticle = (article?: Article) =>
  cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: { Authorization: 'customTrue' },
      body: article ?? testingArticle,
    })
    .then(resp => resp.body);

export const removeTestArticle = (articleId: string) =>
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'customTrue' },
  });

declare global {
  namespace Cypress {
    interface Chainable {
      createTestArticle(article?: Article): Chainable<Article>;
      removeTestArticle(id: string | number): Chainable<void>;
    }
  }
}
