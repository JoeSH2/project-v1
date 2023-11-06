import { useTranslation } from 'react-i18next';
import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import style from './Block.module.scss';

interface BlockProps {
  className?: string;
  children: ReactNode;
}

export const Block: FC<BlockProps> = props => {
  const { className, children } = props;
  const { t } = useTranslation();

  return <div className={classNames(style.block, {}, [className])}>{children}</div>;
};
