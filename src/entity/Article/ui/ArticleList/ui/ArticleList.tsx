import { FC, HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from "shared/ui/Text";
import { useTranslation } from "react-i18next";
import { Article, ArticleView } from '../../../model/types/Article';
import { ArticleCard } from '../../ArticleCard';
import { ArticleCardSkeleton } from '../../ArticleCardSkeleton/ArticleCardSkeleton';
import style from './ArticleList.module.scss';

interface ArticleListProps {
	className?: string;
	view: ArticleView;
	articles: Article[] | undefined;
	target: HTMLAttributeAnchorTarget;
	isLoading?: boolean;
}

export const ArticleList: FC<ArticleListProps> = props => {
	const { t } = useTranslation()
	const { className, articles, target, isLoading, view = 'SMALL' } = props;

	const getSkeletons = (
		<>
			{new Array(view === 'SMALL' ? 8 : 4).fill(0).map((item, i) => (
				// eslint-disable-next-line react/no-array-index-key
				<ArticleCardSkeleton view={view} key={i}/>
			))}
		</>
	);

	return (
		<div className={classNames(style.articleList, {}, [className, style[view]])}>
			{articles ? articles.map(article => (
				<ArticleCard target={target} key={article.id} view={view} article={article}/>
			)) : <Text title={t('Error in receiving articles')}/>}
			{isLoading && getSkeletons}
		</div>
	);
};
