import React, { FC, MutableRefObject, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath, saveScrollPageActions } from '@/features/saveScrollPage';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { useThrottle } from '@/shared/hooks/useThrottle';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TestProps } from '@/shared/types/types';

import style from './PageWrapper.module.scss';

interface PageWrapperProps extends TestProps {
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
    <main
      // eslint-disable-next-line
      data-testid={props['data-testid'] ?? 'Page'}
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(style.pageWrapper, {}, [className])}
    >
      {children}
      {callback && <div className={style.trigger} ref={triggerRef} />}
    </main>
  );
};
