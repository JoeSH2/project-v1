import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
   className?: string;
   children: React.ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames(cls.pageWrapper, {}, [className])}>
      {children}
    </div>
  );
};
