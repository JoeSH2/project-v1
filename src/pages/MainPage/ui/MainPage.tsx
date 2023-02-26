import { Counter } from 'entities/Counter/ui/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div className="mainPage">
      <div>{t('Main page')}</div>
      <Counter />
    </div>
  );
};

export default MainPage;
