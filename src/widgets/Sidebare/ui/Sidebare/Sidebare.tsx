import { getUserAuth } from 'entity/User';
import React, {
  FC, memo, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import ArrowIcon from 'shared/assets/icon/arrow.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { getSidebareLinks } from 'widgets/Sidebare/model/selectors/getSidebareLinks';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { SidebareLink } from '../SidebareLink/SidebareLink';
import style from './Sidebare.module.scss';

interface SidebareProps {
  className?: string;
}

export const Sidebare: FC<SidebareProps> = memo(({ className }: SidebareProps) => {
  const [collapse, setCollapse] = useState(false);
  const isAuth = useSelector(getUserAuth);
  const sidebareLinks = useSelector(getSidebareLinks);

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  const authRoutes = useMemo(
    () => sidebareLinks.filter((route) => !(route.authLink && !isAuth)),
    [isAuth, sidebareLinks],
  );

  const linkItem = useMemo(() => (
    authRoutes.map((item) => (
      <SidebareLink collapse={collapse} item={item} key={item.path} />
    ))
  ), [authRoutes, collapse]);

  return (
    <div
      data-testid="sidebare"
      className={classNames(style.Sidebare, { [style.collapse]: collapse }, [
        className,
      ])}
    >
      <div className={style.wrapperLink}>
        <ul>
          {linkItem}
        </ul>
      </div>
      <Button
        data-testid="toggle-sidebare"
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
});
