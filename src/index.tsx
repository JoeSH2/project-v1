import '@/shared/config/i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ErrorBoundaries } from '@/app/providers/ErrorBoundaries';
import { ThemeProvider } from '@/app/providers/ThemesProvider';
import { App } from '@/app/App';

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
