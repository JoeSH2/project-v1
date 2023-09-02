import { ArticleList, ArticleView } from 'entity/Article'
import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { ReducerList, useAsyncWrapperReducer } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer'
import { PageWrapper } from 'widgets/PageWrapper'
import { ViewSwitcher } from 'widgets/ViewSwitcher'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { useSearchParams } from 'react-router-dom'
import { ArticleSort } from "features/ArticleSort";
import { getArticlePageLoading, getArticlePageView } from '../model/selectors/getArticlePageSelectors'
import { fetchArticleNextPage } from '../model/services/fetchArticleNextPage'
import { articlePageActions, articlePageReducer, getArticle } from '../model/slice/articlePageSlice'
import style from './ArticlesPage.module.scss'
import { fetchArticlePage } from '../model/services/fetchArticlePage'
import { initedArticlePage } from '../model/services/initedArticlePage'

interface ArticlesPageProps {
	className?: string
}

const reducerList: ReducerList = { articlePage: articlePageReducer }

const ArticlesPage: FC<ArticlesPageProps> = memo(({ className }: ArticlesPageProps) => {
	const dispatch = useAppDispatch()
	const article = useSelector(getArticle.selectAll)
	const isLoading = useSelector(getArticlePageLoading)
	const view = useSelector(getArticlePageView)
	const [searchParams] = useSearchParams()

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlePageActions.setView(view))
		},
		[dispatch],
	)

	const onLoadArticle = useCallback(() => {
		dispatch(fetchArticleNextPage())
	}, [dispatch])

	const fetchArticleSort = useCallback(() => {
		dispatch(fetchArticlePage({ replace: true }))
	}, [dispatch])

	useAsyncWrapperReducer(reducerList, true)

	useInitialEffect(() => {
		dispatch(initedArticlePage(searchParams))
	})

	return (
		<PageWrapper callback={onLoadArticle}>
			<ViewSwitcher view={view} onChangeView={onChangeView} className={style.viewWrapper}/>
			<ArticleSort fetchArticleSort={fetchArticleSort}/>
			<ArticleList target='_parent' isLoading={isLoading} view={view} articles={article}/>
		</PageWrapper>
	)
})

export default ArticlesPage
