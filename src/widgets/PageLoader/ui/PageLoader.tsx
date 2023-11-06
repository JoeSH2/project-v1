import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import style from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader';

interface PageLoaderProps {
  className?: string;
  theme?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(style.PageLoader, {}, [className])}>
    <Loader className={style.Loader} />
  </div>
);
