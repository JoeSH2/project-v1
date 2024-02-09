import { Meta, StoryFn } from '@storybook/react';
import { PageNotFound } from './PageNotFound';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/PageNotFound',
  component: PageNotFound,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof PageNotFound>;

const Template: StoryFn<typeof PageNotFound> = () => <PageNotFound />;

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
