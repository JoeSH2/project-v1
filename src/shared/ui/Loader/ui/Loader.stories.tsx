import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';
import { Loader } from '../ui/Loader';
import { ThemeDecorator } from '../../../config/decorators/themeDecorator';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Loader>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Loader> = args => <Loader {...args} />;

export const Dark = Template.bind({});

export const Default = Template.bind({});
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
