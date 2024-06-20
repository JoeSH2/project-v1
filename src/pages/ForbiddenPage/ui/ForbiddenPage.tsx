import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Block } from '@/shared/ui/Block';
import { PageWrapper } from '@/widgets/PageWrapper';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <PageWrapper data-testid='ForbiddenPage'>
      <Block className={className}>
        <p>{t('Forbidden page')}</p>
      </Block>
    </PageWrapper>
  );
};

export default ForbiddenPage;
