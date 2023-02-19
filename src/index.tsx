import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundaries } from 'app/providers/ErrorBoundaries';
import { ThemeProvider } from 'app/providers/ThemesProvider';
import { App } from 'app/App';
import fs from 'fs/promises';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundaries>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundaries>
  </BrowserRouter>,
  document.getElementById('root'),
);
