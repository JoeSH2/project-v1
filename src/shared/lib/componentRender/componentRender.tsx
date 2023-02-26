import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nTest from 'shared/config/i18n/i18nTest';

interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

function componentRender(components: React.ReactNode, { route = '/', initialState = {} }: componentRenderOptions = {}) {
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>
          {components}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}

export default componentRender;
