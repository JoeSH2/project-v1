import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Loader } from '../ui/Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Loader>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Loader> = args => <Loader {...args} />;

export const Default = Template.bind({});
