import { StoryFn, Meta } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = args => (
  <Flex {...args}>
    <p style={{ backgroundColor: 'blue', padding: 20 }}>Flex block</p>
  </Flex>
);

export const Normal = Template.bind({});
Normal.args = {
  align: 'center',
  justify: 'justifyCenter',
  htmlStyle: 'section',
};
