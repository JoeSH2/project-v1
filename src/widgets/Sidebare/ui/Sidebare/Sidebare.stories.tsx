import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { Sidebare } from './Sidebare';

export default {
  title: 'widgets/Sidebare',
  component: Sidebare,
} as ComponentMeta<typeof Sidebare>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Sidebare> = (args) => <Sidebare {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
  user: {
    authData: {
      id: 1,
      username: 'admin',
    },
  },
})];

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({
  user: {
    authData: {
      id: 1,
      username: 'admin',
    },
  },
})];
