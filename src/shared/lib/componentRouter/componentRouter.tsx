import { render } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nTest from 'shared/config/i18n/i18nTest';

interface ComponentRouterOptions {
    route?: string;
}

function ComponentRouter(components: React.ReactNode, options: ComponentRouterOptions = {}) {
  const { route } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTest}>
        {components}
      </I18nextProvider>
    </MemoryRouter>,
  );
}

export default ComponentRouter;
