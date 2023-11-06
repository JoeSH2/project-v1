import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ReducerList } from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nTest from '@/shared/config/i18n/i18nTest';

interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducer?: ReducerList;
}

function componentRender(
  components: React.ReactNode,
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
