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
  width: '900',
  height: '300',
  rounded: '2',
  marginLeft: '10',
  marginRight: '10',
  marginTop: '20',
  marginBottom: '20',
};
