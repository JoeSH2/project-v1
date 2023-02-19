import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainPage } from '../index';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemesProvider';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Dark = Template.bind({});
Dark.args = {
  theme: Theme.DARK,
};

export const Default = Template.bind({});
Default.args = {
  theme: Theme.DEFAULT,
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
