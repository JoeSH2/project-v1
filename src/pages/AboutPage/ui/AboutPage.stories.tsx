import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';
import { AboutPage } from '@/pages/AboutPage';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof AboutPage>;

const Template: StoryFn<typeof AboutPage> = () => <AboutPage />;

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];

export const Brown = Template.bind({});
Brown.args = { theme: Theme.BROWN };
Brown.decorators = [ThemeDecorator(Theme.BROWN), StoreDecorator({})];
