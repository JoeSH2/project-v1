import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import style from './Sidebare.module.scss';

interface SidebareProps {
  className?: string;
  theme?: string;
}

export const Sidebare: FC<SidebareProps> = ({ className }) => {
  const [collapse, setCollapse] = useState(false);
  const { t } = useTranslation();

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div
      className={classNames(style.Sidebare, { [style.collapse]: collapse }, [
        className,
      ])}
    >
      <Button
        theme={ButtonTheme.DEFAULT}
        onClick={toggleCollapse}
        className={style.openBtn}
      >
        {t('Toggle')}
      </Button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
