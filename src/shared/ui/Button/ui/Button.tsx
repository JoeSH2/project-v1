/* eslint-disable no-unused-vars */
import React, { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import style from './Button.module.scss';

export enum ButtonTheme {
  THEME = 'theme',
  CLEAR = 'clear',
  RED = 'red',
  GRAY = 'gray',
  OPACITY = 'opacity'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const { className = '', children, theme = ButtonTheme.THEME, disabled = false, ...otherProps } = props;

  return (
    <button
      disabled={disabled}
      type="button"
      className={classNames(style.Button, { [style.disabled]: disabled }, [className, style[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
});
