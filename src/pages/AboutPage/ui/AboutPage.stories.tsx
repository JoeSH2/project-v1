import { Meta, StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { Theme } from '@/app/providers/ThemesProvider';
import { AboutPage } from '@/pages/AboutPage';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
};

const Template: StoryFn<typeof AboutPage> = () => (
  <Suspense fallback={<div />}>
    <AboutPage />
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
