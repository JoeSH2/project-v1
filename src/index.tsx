import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './shared/config/i18n/i18n';

import { App } from './app/App';
import { ErrorBoundaries } from './app/providers/ErrorBoundaries';
import { StoreProvider } from './app/providers/StoreProvider';
import ThemeProvider from './app/providers/ThemesProvider/ui/ThemeProvider';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundaries>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundaries>
    </StoreProvider>
  </BrowserRouter>,
);
export { ThemesContext } from '@/shared/const/theme';
export { Theme } from '@/shared/const/theme';
export { useTheme } from '@/shared/hooks/useTheme';
