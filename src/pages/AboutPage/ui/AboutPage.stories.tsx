import { Meta, StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { AboutPageAsync } from './AboutPage.async';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AboutPageAsync> = {
  title: 'pages/AboutPageAsync',
  component: AboutPageAsync,
};

const Template: StoryFn<typeof AboutPageAsync> = () => (
  <Suspense fallback={<div />}>
    <AboutPageAsync />
  </Suspense>
);

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];

export const Brown = Template.bind({});
Brown.args = { theme: Theme.BROWN };
Brown.decorators = [ThemeDecorator(Theme.BROWN), StoreDecorator({})];
export default meta;
