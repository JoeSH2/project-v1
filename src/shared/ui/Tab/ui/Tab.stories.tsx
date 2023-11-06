import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tab } from './Tab';

export default {
  title: 'shared/Tab',
  component: Tab,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Tab>;

const Template: StoryFn<typeof Tab> = args => <Tab {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      value: 'TAB 1',
      content: 'TAB 1',
    },
    {
      value: 'TAB 2',
      content: 'TAB 2',
    },
    {
      value: 'TAB 3',
      content: 'TAB 3',
    },
  ],
  activeTab: 'TAB 3',
  onClickTab: action('onClickTab'),
};
