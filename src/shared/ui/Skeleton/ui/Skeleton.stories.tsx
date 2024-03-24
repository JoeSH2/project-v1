import { Meta, StoryFn } from '@storybook/react';

import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = args => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  width: '900px',
  height: '300px',
  rounded: '10px',
  marginLeft: '10px',
  marginRight: '10px',
  marginTop: '20px',
  marginBottom: '20px',
};
