import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entity/Article/model/selectors/getArticleDetails';
import { getUserAuth } from '@/entity/User';

export const getCanEditArticle = createSelector(getArticleDetailsData, getUserAuth, (article, user) => {
  if (!article && !user) {
    return false;
  }

  return article?.user?.id === user?.id;
});
