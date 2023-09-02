import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entity/Article';
import { Text } from 'shared/ui/Text';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { useArticleRecommendationsList } from '../api/articlesRecommendationsApi';

interface ArticlesRecommendationsListProps {
  className?: string;
}

export const ArticlesRecommendationsList: FC<ArticlesRecommendationsListProps> = props => {
  const { className } = props;
  const { t } = useTranslation();
  const { data: articles, isLoading, error } = useArticleRecommendationsList(4);
  return (
    <VStack gap='gap8'>
      <Text size='l' title={t('Recommendations')} />
      <ArticleList target='_blank' className={className} articles={articles} isLoading={isLoading} view='SMALL' />
    </VStack>
  );
};
