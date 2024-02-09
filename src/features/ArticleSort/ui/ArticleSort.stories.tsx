import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';
import { ArticleSort } from './ArticleSort';
import { ArticleSortField } from '../model/consts';
import { ArticleType } from '@/entity/Article';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';

import { Theme } from '@/shared/const/theme';

export default {
  title: 'features/ArticleSort',
  component: ArticleSort,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ArticleSort>;

const Template: StoryFn<typeof ArticleSort> = args => <ArticleSort {...args} />;

export const Dark = Template.bind({});
Dark.decorators = [
  StoreDecorator({
    articleSort: {
      order: 'asc',
      search: 'react',
      sort: ArticleSortField.VIEWS,
      type: ArticleType.CRYPTO,
    },
  }),
];

export const Brown = Template.bind({});
Brown.decorators = [
  ThemeDecorator(Theme.BROWN),
  StoreDecorator({
    articleSort: {
      order: 'asc',
      search: 'react',
      sort: ArticleSortField.VIEWS,
      type: ArticleType.CRYPTO,
    },
  }),
];

export const Normal = Template.bind({});
Normal.decorators = [
  ThemeDecorator(Theme.DEFAULT),
  StoreDecorator({
    articleSort: {
      order: 'asc',
      search: 'react',
      sort: ArticleSortField.VIEWS,
      type: ArticleType.CRYPTO,
    },
  }),
];
