import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'shared/ui/PageWrapper';

import style from './PageNotFound.module.scss';

interface PageNotFoundProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode
}

export const PageNotFound: FC<PageNotFoundProps> = ({ className, children }) => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      {t('Page not found')}
    </PageWrapper>
  );
};
