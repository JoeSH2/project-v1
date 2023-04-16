import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'shared/ui/PageWrapper';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <PageWrapper>
      <div>{t('About us')}</div>
    </PageWrapper>
  );
};

export default AboutPage;
