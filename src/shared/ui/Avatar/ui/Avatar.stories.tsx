import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';

import ArtIcon from './art.jpg';
import { Avatar } from './Avatar';
import { ThemeDecorator } from '../../../config/decorators/themeDecorator';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: { backgroundColor: { control: 'color' } },
  args: {
    src: ArtIcon,
    alt: 'art',
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];

export default meta;
