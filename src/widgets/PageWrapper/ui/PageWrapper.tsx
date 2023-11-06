import React, { FC, MutableRefObject, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

import style from './PageWrapper.module.scss';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getScrollByPath, saveScrollPageActions } from '@/features/saveScrollPage';
import { useThrottle } from '@/shared/hooks/useThrottle';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PageWrapperProps {
  className?: string;
  children: React.ReactNode;
  callback?: () => void;
}

export const PageWrapper: FC<PageWrapperProps> = props => {
  const { className, children, callback } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(saveScrollPageActions.setSaveScroll({ path: pathname, position: e.currentTarget.scrollTop }));
  }, 300);

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  useInfiniteScroll({ triggerRef, wrapperRef, callback });

  return (
    <main onScroll={onScroll} ref={wrapperRef} className={classNames(style.pageWrapper, {}, [className])}>
      {children}
      {callback && <div className={style.trigger} ref={triggerRef} />}
    </main>
  );
};
