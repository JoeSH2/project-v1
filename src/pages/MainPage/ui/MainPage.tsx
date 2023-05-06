import { useTranslation } from 'react-i18next';
import { Block } from 'shared/ui/Block';
import { PageWrapper } from 'widgets/PageWrapper';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <PageWrapper>
      <Block>{t('Main page')}</Block>
    </PageWrapper>
  );
};

export default MainPage;
