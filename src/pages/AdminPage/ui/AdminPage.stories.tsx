import { Meta, StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { AdminPageAsync } from './AdminPage.async';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/AdminPageAsync',
  component: AdminPageAsync,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof AdminPageAsync>;

const Template: StoryFn<typeof AdminPageAsync> = () => (
  <Suspense fallback={<div />}>
    <AdminPageAsync />
  </Suspense>
);

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
