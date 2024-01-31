import { Meta, StoryFn } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
  title: 'entity/RatingCard',
  component: RatingCard,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof RatingCard>;

const Template: StoryFn<typeof RatingCard> = args => <RatingCard {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
