import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import style from './Loader.module.scss';

type LoaderTheme = 'small' | 'medium' | 'large';

interface LoaderProps {
  className?: string;
  theme?: LoaderTheme;
}

export const Loader: FC<LoaderProps> = ({ className, theme = 'medium' }) => (
  <span className={classNames(style.Loader, {}, [className, theme])} />
);
