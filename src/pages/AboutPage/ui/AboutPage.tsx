import { useTranslation } from 'react-i18next';
import { Block } from '@/shared/ui/Block';
import { PageWrapper } from '@/widgets/PageWrapper';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <PageWrapper data-testid='AboutPage'>
      <Block>{t('About us')}</Block>
    </PageWrapper>
  );
};

export default AboutPage;
