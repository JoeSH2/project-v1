import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './AppLink.module.scss';

export enum AppLinkTheme {
  DARK = 'dark',
  DEFAULT = 'default',
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className, theme = AppLinkTheme.DEFAULT, to, children,
  } = props;
  return (
    <Link
      to={to}
      className={classNames(style.AppLink, {}, [className, style[theme]])}
    >
      {children}
    </Link>
  );
};
