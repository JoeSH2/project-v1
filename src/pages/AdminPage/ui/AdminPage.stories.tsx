import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore';
import { AdminPage } from '../index';

export default {
  title: 'pages/AdminPage',
  component: AdminPage,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof AdminPage>;

const Template: StoryFn<typeof AdminPage> = () => <AdminPage />;

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
