import { Meta, StoryFn } from '@storybook/react';

import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = args => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: 'In computer programming, a comment is a programmer-readable explanation or annotation in the source code of a computer program.',
};
