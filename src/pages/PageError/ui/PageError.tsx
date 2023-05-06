import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Block } from 'shared/ui/Block';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { PageWrapper } from 'widgets/PageWrapper';

import style from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <PageWrapper>
      <Block>
        <div>{t('There was an error, return to the home page?')}</div>
        <Button onClick={reloadPage} theme={ButtonTheme.CLEAR}>{t('Reload page')}</Button>
      </Block>
    </PageWrapper>
  );
};
