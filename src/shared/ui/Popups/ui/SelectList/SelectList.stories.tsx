import { Meta, StoryFn } from '@storybook/react';
import { SelectList } from './SelectList';

export default {
  title: 'shared/SelectList',
  component: SelectList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof SelectList>;

const Template: StoryFn<typeof SelectList> = args => <SelectList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  items: [
    {
      value: 'www',
      content: 'xxx',
    },
  ],
  value: 'select',
  readonly: false,
  positionList: 'bottom',
};
