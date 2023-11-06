import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';
import { ArticleCreatePage } from '@/pages/ArticleCreatePage';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';

export default {
  title: 'pages/ArticleCreatePage',
  component: ArticleCreatePage,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ArticleCreatePage>;

const Template: StoryFn<typeof ArticleCreatePage> = () => <ArticleCreatePage />;

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
