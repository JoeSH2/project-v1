import { FC, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Tab } from 'shared/ui/Tab';
import { TabsOptions } from 'shared/ui/Tab/ui/Tab';
import { ArticleType } from 'entity/Article';
import { useSelector } from 'react-redux';
import { getArticleSortType } from '../../model/selectors/getArticleSortSelectors';
import style from './ArticleTabsFilters.module.scss';

export interface ArticleTabsFiltersProps {
  className?: string;
  onChangeTabs: (newTab: ArticleType) => void;
}

export const ArticleTabsFilters: FC<ArticleTabsFiltersProps> = memo(
  ({ className, onChangeTabs }: ArticleTabsFiltersProps) => {
    const { t } = useTranslation();
    const type = useSelector(getArticleSortType);

    const articleTabs: TabsOptions<ArticleType>[] = useMemo(
      () => [
        {
          value: ArticleType.ALL,
          content: t('ALL'),
        },
        {
          value: ArticleType.IT,
          content: t('IT'),
        },
        {
          value: ArticleType.CRYPTO,
          content: t('CRYPTO'),
        },
        {
          value: ArticleType.ECONOMICS,
          content: t('ECONOMICS'),
        },
        {
          value: ArticleType.SCIENCE,
          content: t('SCIENCE'),
        },
      ],
      [t],
    );

    const onClickTabs = useCallback(
      (tab: TabsOptions<ArticleType>) => {
        onChangeTabs(tab.value);
      },
      [onChangeTabs],
    );

    return (
      <div className={classNames(style.ArticleTabsFilters, {}, [className])}>
        <Tab className={style.tab} activeTab={type} onClickTab={onClickTabs} tabs={articleTabs} />
      </div>
    );
  },
);
