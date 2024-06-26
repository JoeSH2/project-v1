import { FC, HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import style from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = props => {
  const { className, children, ...otherProps } = props;

  return (
    <div {...otherProps} className={classNames(style.card, {}, [className])}>
      {children}
    </div>
  );
};
