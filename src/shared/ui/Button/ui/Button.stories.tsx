import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemesProvider';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR,
  children: 'toggle',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: ButtonTheme.DARK,
  children: 'toggle',

};

export const Default = Template.bind({});
Default.args = {
  theme: ButtonTheme.DEFAULT,
  children: 'toggle',
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
