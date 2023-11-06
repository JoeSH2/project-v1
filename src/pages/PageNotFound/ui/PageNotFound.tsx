import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Block } from '@/shared/ui/Block';
import { PageWrapper } from '@/widgets/PageWrapper';

interface PageNotFoundProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode;
}

export const PageNotFound: FC<PageNotFoundProps> = ({ className, children }) => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Block>{t('Page not found')}</Block>
    </PageWrapper>
  );
};
