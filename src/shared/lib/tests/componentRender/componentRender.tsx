import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import i18nTest from '../../../config/i18n/i18nTest';
import { ReducerList } from '../../useAsyncWrapperReducer/useAsyncWrapperReducer';

interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducer?: ReducerList;
}

function componentRender(
  components: ReactNode,
  { route = '/', initialState = {}, asyncReducer }: componentRenderOptions = {},
) {
  return render(
    <StoreProvider asyncReducer={asyncReducer} initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>{components}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}

export default componentRender;
