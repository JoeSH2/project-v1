import 'shared/config/i18n/i18n';

import { App } from 'app/App';
import { ErrorBoundaries } from 'app/providers/ErrorBoundaries';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemesProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

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
