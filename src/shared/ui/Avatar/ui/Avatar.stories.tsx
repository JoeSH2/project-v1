import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';

import ArtIcon from './art.jpg';
import { Avatar } from '@/shared/ui/Avatar';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Avatar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Avatar> = args => <Avatar {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  src: ArtIcon,
  alt: 'art',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Default = Template.bind({});
Default.args = {
  src: ArtIcon,
  alt: 'art',
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
