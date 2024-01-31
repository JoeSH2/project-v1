import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';
import { Block } from '@/shared/ui/Block';
import { RatingCard } from '@/entity/Rating';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      <Block>
        <p>{t('Main page')}</p>
        <RatingCard title='How`s this for an article?' feedback modalTitle='Share your impressions' />
      </Block>
    </PageWrapper>
  );
};

export default MainPage;
