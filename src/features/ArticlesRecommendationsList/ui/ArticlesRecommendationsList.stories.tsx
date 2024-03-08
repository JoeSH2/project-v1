import { Meta, StoryFn } from '@storybook/react';
import { Article, ArticleType } from '@/entity/Article';
import { UserRole } from '@/entity/User';
import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';

const article: Article = {
  title: 'asdasdasd',
  blocks: [],
  id: '1',
  createdAt: 'sdaasd',
  img: '',
  subtitle: 'asdasda',
  type: [ArticleType.CRYPTO],
  user: {
    avatar: '',
    id: '1',
    username: 'shine',
    role: [UserRole.ADMIN],
  },
  views: 22,
};
export default {
  title: 'features/ArticlesRecommendationsList',
  component: ArticlesRecommendationsList,
} as Meta<typeof ArticlesRecommendationsList>;

const Template: StoryFn<typeof ArticlesRecommendationsList> = () => <ArticlesRecommendationsList />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
Default.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=4`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
        { ...article, id: '4' },
      ],
    },
  ],
};
