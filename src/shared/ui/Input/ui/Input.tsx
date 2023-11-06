import React, { ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import style from './Input.module.scss';

type InputExtends = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'>;

type InputTheme = 'default' | 'dark' | 'clear';

interface InputProps extends InputExtends {
  className?: string;
  theme?: InputTheme;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
  type?: string;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = memo(
  ({ className, theme = 'dark', value, onChange, type = 'text', autofocus, readonly, ...otherProps }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    useEffect(() => {
      if (autofocus) {
        ref.current?.focus();
      }
    }, [autofocus]);

    return (
      <input
        ref={ref}
        value={value}
        onChange={changeInput}
        className={classNames(style.Input, { [style.readonly]: readonly }, [className, style[theme]])}
        type={type}
        readOnly={readonly}
        // eslint-disable-next-line
        {...otherProps}
      />
    );
  },
);
