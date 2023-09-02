import React, { FC, memo, useCallback, useMemo, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Block } from 'shared/ui/Block';
import { SortOrder } from 'shared/types/types';
import { SelectOptions } from 'shared/ui/Select/ui/Select';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { ReducerList, useAsyncWrapperReducer } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { articlePageActions } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { useDebounce } from 'shared/hooks/useDebounce';
import { ArticleType } from 'entity/Article';
import { SelectList } from "shared/ui/SelectList";
import { HStack } from "shared/ui/Stack/HStack/HStack";
import ArrowIcon from 'shared/assets/icon/arrow.svg'
import { Text } from "shared/ui/Text";
import style from './ArticleSort.module.scss';
import { ArticleSortField } from '../model/types/ArticleSortSchema';
import {
	getArticleSortOrder,
	getArticleSortSearch,
	getArticleSortSort,
} from '../model/selectors/getArticleSortSelectors';
import { articleSortActions, articleSortReducer } from '../model/slice/articleSortSlice';
import { ArticleTabsFilters } from './ArticleTabsFilters/ArticleTabsFilters';

interface ArticleSortProps {
	className?: string;
	fetchArticleSort: () => void;
}

const reducerList: ReducerList = { articleSort: articleSortReducer };

export const ArticleSort: FC<ArticleSortProps> = memo((
	{ className, fetchArticleSort }: ArticleSortProps,
) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const order = useSelector(getArticleSortOrder);
	const sort = useSelector(getArticleSortSort);
	const search = useSelector(getArticleSortSearch);

	const orderOption = useMemo<SelectOptions<SortOrder>[]>(() => [
		{
			value: 'asc',
			content: t('ascending'),
		},
		{
			value: 'desc',
			content: t('descending'),
		},

	], [t]);

	const viewsOption = useMemo(() => [
		{
			value: ArticleSortField.CEATED,
			content: t('newest'),
		},
		{
			value: ArticleSortField.VIEWS,
			content: t('number of views'),
		},
		{
			value: ArticleSortField.TITLE,
			content: t('name'),
		},
	], [t]);

	const deboucedFetchArticleSort = useDebounce(fetchArticleSort, 500);

	const onChangeOrder = useCallback((newOrder: SortOrder) => {
		dispatch(articleSortActions.setOrder(newOrder));
		dispatch(articlePageActions.setPage(1));
		fetchArticleSort();
	}, [dispatch, fetchArticleSort]);

	const onChangeSort = useCallback((newSort: ArticleSortField) => {
		dispatch(articleSortActions.setSort(newSort));
		dispatch(articlePageActions.setPage(1));
		fetchArticleSort();
	}, [dispatch, fetchArticleSort]);

	const onChangeSearch = useCallback((newSearch: string) => {
		dispatch(articleSortActions.setSearch(newSearch));
		dispatch(articlePageActions.setPage(1));
		deboucedFetchArticleSort();
	}, [deboucedFetchArticleSort, dispatch]);

	const onChangeType = useCallback((newTab: ArticleType) => {
		dispatch(articleSortActions.setType(newTab));
		dispatch(articlePageActions.setPage(1));
		fetchArticleSort();
	}, [dispatch, fetchArticleSort]);

	useAsyncWrapperReducer(reducerList, true);
	return (
		<Block className={classNames(style.ArticleSort, {}, [className])}>
			<HStack gap="gap24" align="center" className={style.sortWrapper}>
				<label className={style.label} htmlFor="article_search">{t('Sort by')}</label>
				<SelectList
					value={
						<>
							<Text size="m" className={style.textBtn} text={order}/>
							<ArrowIcon className={style.icon}/>
						</>
					}
					onChange={onChangeOrder}
					items={orderOption}
					classNameBtn={style.select}
					theme="clear"
					positionList="bottom"
				/>
				<SelectList
					value={
						<>
							<Text size="m" className={style.textBtn} text={sort}/>
							<ArrowIcon className={style.icon}/>
						</>
					}
					onChange={onChangeSort}
					items={viewsOption}
					classNameBtn={style.select}
					theme="clear"
					positionList="bottom"
				/>
			</HStack>
			<Input onChange={onChangeSearch} value={search} className={style.input} placeholder="Search..."/>
			<ArticleTabsFilters onChangeTabs={onChangeType}/>
		</Block>
	);
});
