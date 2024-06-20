import { screen } from '@testing-library/react';

import { getMainPage } from '@/shared/const/route';
import componentRender from '@/shared/lib/tests/componentRender/componentRender';

import AppRoute from './AppRoute';

test('Main page render', async () => {
  componentRender(<AppRoute />, { route: getMainPage() });

  const page = await screen.findByTestId('MainPage');
  expect(page).toBeDefined();
});
