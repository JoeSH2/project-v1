import { Meta, StoryFn } from '@storybook/react';

import { ViewSwitcher } from './ViewSwitcher';

export default {
  title: 'shared/ViewSwitcher',
  component: ViewSwitcher,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ViewSwitcher>;

const Template: StoryFn<typeof ViewSwitcher> = args => <ViewSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
