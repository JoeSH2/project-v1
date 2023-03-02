import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Text.module.scss';

type TextTheme = 'theme' | 'red'

interface TextProps {
  className?: string;
  theme?: TextTheme;
  title?: string;
  text?: string;
}

export const Text: FC<TextProps> = ({
  className, title, text, theme,
}) => (
  <div className={classNames(style.Text, {}, [className, style[theme]])}>
    <h1 className={style.title}>{title}</h1>
    <div className={style.text}>{text}</div>
  </div>
);
