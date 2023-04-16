import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'theme',
  text: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem, ipsum.',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'theme',
  text: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem, ipsum.',
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];

export const Red = Template.bind({});
Red.args = {
  theme: 'red',
  text: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem, ipsum.',
};

export const RedDark = Template.bind({});
RedDark.args = {
  theme: 'red',
  text: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem, ipsum.',
};
RedDark.decorators = [ThemeDecorator(Theme.DEFAULT)];
