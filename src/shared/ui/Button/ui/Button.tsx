/* eslint-disable no-unused-vars */
import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  DEFAULT = 'default',
  DARK = 'dark',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(style.Button, {}, [className, style[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
};
