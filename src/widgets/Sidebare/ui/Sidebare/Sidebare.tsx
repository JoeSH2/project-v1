import React, { FC, memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuth } from '@/entity/User';
import ArrowIcon from '@/shared/assets/icon/arrow.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';

import { SidebareLink } from '../SidebareLink/SidebareLink';
import style from './Sidebare.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { getSidebareLinks } from '../../model/selectors/getSidebareLinks';

interface SidebareProps {
  className?: string;
}

export const Sidebare: FC<SidebareProps> = memo(({ className }: SidebareProps) => {
  const [collapse, setCollapse] = useState(false);
  const isAuth = useSelector(getUserAuth);
  const sidebareLinks = useSelector(getSidebareLinks);

  const toggleCollapse = () => {
    setCollapse(prev => !prev);
  };

  const authRoutes = useMemo(
    () => sidebareLinks.filter(route => !(route.authLink && !isAuth)),
    [isAuth, sidebareLinks],
  );

  const linkItem = useMemo(
    () => authRoutes.map(item => <SidebareLink collapse={collapse} item={item} key={item.path} />),
    [authRoutes, collapse],
  );

  return (
    <aside
      data-testid='sidebare'
      className={classNames(style.Sidebare, { [style.collapse]: collapse }, [className])}
    >
      <VStack
        justify='justifyBetween'
        align={collapse ? 'center' : 'start'}
        htmlStyle='nav'
        gap='gap16'
        className={style.wrapperLink}
      >
        {linkItem}
      </VStack>
      <Button data-testid='toggle-sidebare' onClick={toggleCollapse} className={style.openBtn}>
        <ArrowIcon className={collapse ? style.arrow : `${style.arrow} ${style.arrowRotate}`} />
      </Button>
      <div className={!collapse ? style.switchers : `${style.switchers} ${style.switchersColumn}`}>
        <ThemeSwitcher />
        <LangSwitcher isCollapsed={collapse} />
      </div>
    </aside>
  );
});
