import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Block } from 'shared/ui/Block';
import { PageWrapper } from 'widgets/PageWrapper';

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
      <Block>
        {t('Page not found')}
      </Block>
    </PageWrapper>
  );
};
