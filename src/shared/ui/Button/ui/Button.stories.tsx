import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR,
  children: 'toggle',
};

export const Default = Template.bind({});
Default.args = { children: 'toggle' };
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
