import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Block } from '@/shared/ui/Block';
import { PageWrapper } from '@/widgets/PageWrapper';

interface PageNotFoundProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageNotFound: FC<PageNotFoundProps> = ({ className, children }) => {
  const { t } = useTranslation();

  return (
    <PageWrapper data-testid='PageNotFound'>
      <Block>{t('Page not found')}</Block>
    </PageWrapper>
  );
};
