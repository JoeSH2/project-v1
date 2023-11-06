import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';
import { Block } from '@/shared/ui/Block';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      <Block>
        <p>{t('Main page')}</p>
      </Block>
    </PageWrapper>
  );
};

export default MainPage;
