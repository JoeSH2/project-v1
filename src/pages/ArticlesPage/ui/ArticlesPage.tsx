import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticleList, ArticleView } from '@/entity/Article';
import { ArticleSort } from '@/features/ArticleSort';
import { ViewSwitcher } from '@/features/ViewSwitcher';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import {
  ReducerList,
  useAsyncWrapperReducer,
} from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { PageWrapper } from '@/widgets/PageWrapper';

import {
  getArticlePageLoading,
  getArticlePageView,
  useGetArticleItem,
} from '../model/selectors/getArticlePageSelectors';
import { fetchArticleNextPage } from '../model/services/fetchArticleNextPage';
import { fetchArticlePage } from '../model/services/fetchArticlePage';
import { initedArticlePage } from '../model/services/initedArticlePage';
import {
  articlePageActions,
  articlePageReducer,
  getArticle,
} from '../model/slice/articlePageSlice';

import style from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducerList: ReducerList = { articlePage: articlePageReducer };

const ArticlesPage: FC<ArticlesPageProps> = memo(({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const article = useSelector(getArticle.selectAll);
  const isLoading = useSelector(getArticlePageLoading);
  const view = useSelector(getArticlePageView);
  const [searchParams] = useSearchParams();
  const articleItem = useGetArticleItem('22');
  console.log(articleItem);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch],
  );

  const onLoadArticle = useCallback(() => {
    dispatch(fetchArticleNextPage());
  }, [dispatch]);

  const fetchArticleSort = useCallback(() => {
    dispatch(fetchArticlePage({ replace: true }));
  }, [dispatch]);

  useAsyncWrapperReducer(reducerList, true);

  useInitialEffect(() => {
    dispatch(initedArticlePage(searchParams));
  });

  return (
    <PageWrapper data-testid='ArticlesPage' callback={onLoadArticle}>
      <ViewSwitcher view={view} onChangeView={onChangeView} className={style.viewWrapper} />
      <ArticleSort fetchArticleSort={fetchArticleSort} />
      <ArticleList target='_parent' isLoading={isLoading} view={view} articles={article} />
    </PageWrapper>
  );
});

export default ArticlesPage;
