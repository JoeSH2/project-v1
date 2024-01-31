import { Meta, StoryFn } from '@storybook/react';
import { ArticleRatingAsync } from './ArticleRating.async';
import { StoreDecorator } from '../../../../storybook-static/shared/config/decorators/StoreDecoratore';

export default {
  title: 'features/ArticleRating',
  component: ArticleRatingAsync,
} as Meta<typeof ArticleRatingAsync>;

const Template: StoryFn<typeof ArticleRatingAsync> = args => <ArticleRatingAsync {...args} />;

export const GetRating = Template.bind({});
GetRating.args = { articleId: '1' };
GetRating.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1', username: '123' },
    },
  }),
];
GetRating.parameters = {
  mockData: [
    {
      url: `${__API__}/articles-rating?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          userId: '1',
          articleId: '1',
          hasFeedback: true,
          feedback: 'Good',
          rate: 4,
        },
      ],
    },
  ],
};
