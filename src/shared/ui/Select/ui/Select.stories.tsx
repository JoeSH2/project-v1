import { Meta, StoryFn } from '@storybook/react';
import { Select } from '../ui/Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Select>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Select> = args => <Select {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  value: 'Vot',
  options: [
    { value: 'a', content: 'a' },
    { value: 'n', content: 'n' },
    { value: 'd', content: 'd' },
    { value: 'w', content: 'w' },
  ],
};
