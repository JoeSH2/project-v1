import { Meta, StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { Theme } from '@/app/providers/ThemesProvider';
import { MainPageAsync } from './MainPage.async';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';

export default {
  title: 'pages/MainPageAsync',
  component: MainPageAsync,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof MainPageAsync>;

const Template: StoryFn<typeof MainPageAsync> = () => (
  <Suspense fallback={<div />}>
    <MainPageAsync />
  </Suspense>
);

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
