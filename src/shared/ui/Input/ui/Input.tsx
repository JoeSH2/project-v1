import React, {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Input.module.scss';

type InputExtends = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

type InputTheme = 'default' | 'dark' | 'clear'

interface InputProps extends InputExtends {
  className?: string;
  theme?: InputTheme;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = memo(({
  className,
  theme,
  value,
  onChange,
  type = 'text',
  autofocus,
  ...otherProps
}: InputProps) => {
  const ref = useRef<HTMLInputElement>();

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      ref.current.focus();
    }
  }, []);

  return (
    <input
      // eslint-disable-next-line
      ref={ref}
      {...otherProps}
      value={value}
      onChange={changeInput}
      className={classNames(style.Input, {}, [className, style[theme]])}
      type={type}
    />
  );
});
