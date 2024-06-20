import { useTranslation } from 'react-i18next';

import { Counter } from '@/entity/Counter';
import { ToggleFeature } from '@/shared/lib/featuresFlags/ToogleFeature/ToggleFeature';
import { Block } from '@/shared/ui/Block';
import { Text } from '@/shared/ui/Text';
import { PageWrapper } from '@/widgets/PageWrapper';

const MainPage = () => {
  const { t } = useTranslation('main');

  // const counter = toggleFeature({
  //   name: 'isCounterEnabled',
  //   newFeature: () => <Counter />,
  //   defaultFeature: () => <div />,
  // });

  return (
    <PageWrapper data-testid='MainPage'>
      <Block>
        <p>{t('Main page')}</p>
        {/* {counter} */}
        <ToggleFeature
          name='isCounterEnabled'
          defaultFeature={<Counter />}
          newFeature={<Text title='New features' />}
        />
      </Block>
    </PageWrapper>
  );
};

export default MainPage;
