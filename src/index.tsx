import { ThemeProvider } from 'app/providers/ThemesProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import 'shared/config/i18n/i18n';
import { ErrorBoundaries } from 'app/providers/ErrorBoundaries';

const fs = require('fs').promises;

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
