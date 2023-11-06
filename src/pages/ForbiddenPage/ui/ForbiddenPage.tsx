import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { PageWrapper } from '@/widgets/PageWrapper';
import { Block } from '@/shared/ui/Block';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <Block className={className}>
        <p>{t('Forbidden page')}</p>
      </Block>
    </PageWrapper>
  );
};

export default ForbiddenPage;
