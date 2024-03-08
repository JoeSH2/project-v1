import { Meta, StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import { ArticleCreatePageAsync } from './ArticleCreatePage.async';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/ArticleCreatePageAsync',
  component: ArticleCreatePageAsync,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ArticleCreatePageAsync>;

const Template: StoryFn<typeof ArticleCreatePageAsync> = () => (
  <Suspense fallback={<div />}>
    <ArticleCreatePageAsync />
  </Suspense>
);

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
