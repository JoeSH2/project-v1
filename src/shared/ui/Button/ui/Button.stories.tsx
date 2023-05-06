import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { Button, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR,
  children: 'toggle',
};

export const Default = Template.bind({});
Default.args = { children: 'toggle', };
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
