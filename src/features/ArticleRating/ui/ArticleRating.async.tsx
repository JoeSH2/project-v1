import { FC, lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync: FC<ArticleRatingProps> = props => (
  <Suspense>
    <ArticleRatingLazy {...props} />
  </Suspense>
);
