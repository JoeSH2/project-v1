import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'default',
  value: 'Login',
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
  value: 'Login',
};
