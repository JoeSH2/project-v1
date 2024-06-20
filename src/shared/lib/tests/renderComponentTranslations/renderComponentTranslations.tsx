import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import React from '@/shared/config/i18n/i18nTest';
import i18nTest from '@/shared/config/i18n/i18nTest';

function renderComponentTranslations(components: React.ReactNode) {
  return render(<I18nextProvider i18n={i18nTest}>{components}</I18nextProvider>);
}

export default renderComponentTranslations;
