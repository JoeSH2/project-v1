import { useTheme } from 'app/providers/ThemesProvider';
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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(style.Button, {}, [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
