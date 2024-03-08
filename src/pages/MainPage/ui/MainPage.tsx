import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';
import { Block } from '@/shared/ui/Block';
import { Counter } from '@/entity/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper data-testid='MainPage'>
      <Block>
        <p>{t('Main page')}</p>
        <Counter />
      </Block>
    </PageWrapper>
  );
};

export default MainPage;
