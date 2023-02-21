import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import ArrowIcon from 'shared/assets/icon/arrow.svg';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import style from './Sidebare.module.scss';

interface SidebareProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode
}

export const Sidebare: FC<SidebareProps> = ({ className }) => {
  const [collapse, setCollapse] = useState(false);
  const { t } = useTranslation();

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebare"
      className={classNames(style.Sidebare, { [style.collapse]: collapse }, [
        className,
      ])}
    >
      <Button
        data-testid="toggle-sidebare"
        theme={ButtonTheme.DEFAULT}
        onClick={toggleCollapse}
        className={style.openBtn}
      >
        <ArrowIcon className={collapse ? style.arrow : `${style.arrow} ${style.arrowRotate}`} />
      </Button>
      <div className={!collapse ? style.switchers : `${style.switchers} ${style.switchersColumn}`}>
        <ThemeSwitcher />
        <LangSwitcher isCollapsed={collapse} />
      </div>
    </div>
  );
};
