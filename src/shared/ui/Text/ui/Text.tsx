import { DefaultTFuncReturn } from 'i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import style from './Text.module.scss';
import { TestProps } from '@/shared/types/types';

type TextTheme = 'theme' | 'red' | 'inverted';

interface TextProps extends TestProps {
  className?: string;
  theme?: TextTheme;
  title?: string | DefaultTFuncReturn;
  text?: string | DefaultTFuncReturn;
  align?: 'center' | 'left' | 'right';
  size?: 's' | 'm' | 'l' | 'xl';
}

export const Text: FC<TextProps> = props => {
  const { className, title, text, theme = 'theme', align = 'center', size = 'xl' } = props;

  return (
    <div className={classNames(style.Text, {}, [style[theme], style[align], style[size], className])}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.text}>{text}</p>
    </div>
  );
};
