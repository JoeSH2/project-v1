import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Loader.module.scss';

interface LoaderProps {
  className?: string;
  theme?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <span className={classNames(style.Loader, {}, [className])} />
);
