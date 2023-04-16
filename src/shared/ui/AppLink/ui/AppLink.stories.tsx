import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

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

// eslint-disable-next-line react/jsx-props-no-spreading
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
