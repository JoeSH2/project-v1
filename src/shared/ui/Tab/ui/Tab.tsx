import { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import style from './Tab.module.scss';

export type TabsOptions<T> = {
  value: T;
  content: ReactNode;
};

enum TabTheme {
  NORMAL = 'normal',
  ACTIVE = 'active',
}

interface TabProps<T extends string> {
  className?: string;
  tabs: TabsOptions<T>[];
  activeTab: T;
  onClickTab: (tab: TabsOptions<T>) => void;
}

export function Tab<T extends string>(props: TabProps<T>) {
  const { className, tabs, onClickTab, activeTab } = props;
  const { t } = useTranslation();

  const onChangeTab = useCallback((tab: TabsOptions<T>) => () => onClickTab(tab), [onClickTab]);

  return (
    <nav className={style.TabWrapper}>
      {tabs.map(tab => (
        <div
          key={tab.value}
          className={classNames(style.Tab, {}, [
            className,
            tab.value === activeTab ? style[TabTheme.ACTIVE] : style[TabTheme.NORMAL],
          ])}
          onClick={onChangeTab(tab)}
        >
          {tab.content}
        </div>
      ))}
    </nav>
  );
}
