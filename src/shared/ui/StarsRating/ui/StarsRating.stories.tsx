import { Meta, StoryFn } from '@storybook/react';
import { StarsRating } from './StarsRating';

export default {
  title: 'shared/StarsRating',
  component: StarsRating,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof StarsRating>;

const Template: StoryFn<typeof StarsRating> = args => <StarsRating {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
