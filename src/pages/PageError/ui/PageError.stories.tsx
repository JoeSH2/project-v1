import { Meta, StoryFn } from '@storybook/react';
import { PageError } from './PageError';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/PageError',
  component: PageError,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof PageError>;

const Template: StoryFn<typeof PageError> = () => <PageError />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
