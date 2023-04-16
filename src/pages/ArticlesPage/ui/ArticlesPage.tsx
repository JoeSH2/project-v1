import { ArticleBlockType, ArticleList, ArticleView } from 'entity/Article';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducerList, useAsyncWrapperReducer } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { PageWrapper } from 'shared/ui/PageWrapper';
import { ViewSwitcher } from 'widgets/ViewSwitcher';

import { getArticlePageError, getArticlePageLoading, getArticlePageView } from '../model/selectors/getArticlePageSelectors';
import { fetchArticlePage } from '../model/services/fetchArticlePage';
import { articlePageActions, articlePageReducer, getArticle } from '../model/slice/articlePageSlice';
import style from './ArticlesPage.module.scss';

interface ArticlesPageProps {
   className?: string;
}

const reducerList: ReducerList = {
  articlePage: articlePageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const dispatch = useAppDispatch();
  const article = useSelector(getArticle.selectAll);
  const isLoading = useSelector(getArticlePageLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  useAsyncWrapperReducer(reducerList);

  useInitialEffect(() => {
    dispatch(fetchArticlePage());
    dispatch(articlePageActions.addLocalStorageView());
  });

  return (
    <PageWrapper>
      <ViewSwitcher view={view} onChangeView={onChangeView} className={style.viewWrapper} />
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={article}
      />
    </PageWrapper>
  );
};

export default ArticlesPage;
