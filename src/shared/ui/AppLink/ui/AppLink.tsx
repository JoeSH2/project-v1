import React, { FC, HTMLAttributeAnchorTarget } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import style from './AppLink.module.scss';

export enum AppLinkTheme {
  DARK = 'dark',
  DEFAULT = 'default',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  target?: HTMLAttributeAnchorTarget;
}

export const AppLink: FC<AppLinkProps> = props => {
  const { className, theme = AppLinkTheme.DEFAULT, to, children, target } = props;
  return (
    <Link target={target} to={to} className={classNames(style.AppLink, {}, [className, style[theme]])}>
      {children}
    </Link>
  );
};
