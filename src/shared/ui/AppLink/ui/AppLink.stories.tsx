import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemesProvider';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'click me',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  theme: AppLinkTheme.DARK,
};

export const Default = Template.bind({});
Default.args = {
  theme: AppLinkTheme.DEFAULT,
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
