import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundaries } from 'app/providers/ErrorBoundaries';
import { ThemeProvider } from 'app/providers/ThemesProvider';
import { App } from 'app/App';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'shared/config/i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundaries>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundaries>
    </BrowserRouter>
  </StoreProvider>,
);
