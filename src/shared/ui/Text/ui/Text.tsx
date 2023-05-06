import { DefaultTFuncReturn, TFunction } from 'i18next';
import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import style from './Text.module.scss';

type TextTheme = 'theme' | 'red'

interface TextProps {
  className?: string;
  theme?: TextTheme;
  title?: string | DefaultTFuncReturn;
  text?: string | DefaultTFuncReturn;
  align?: 'center' | 'left'| 'right',
  size?: 's' | 'm' | 'l' | 'xl'
}

export const Text: FC<TextProps> = ({ className, title, text, theme = 'theme', align = 'center', size = 'xl', }) => (
  <div className={classNames(style.Text, {}, [style[theme], style[align], style[size], className])}>
    <h1 className={style.title}>{title}</h1>
    <p className={style.text}>{text}</p>
  </div>
);
