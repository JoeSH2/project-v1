import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from './Tab';

export default {
  title: 'shared/Tab',
  component: Tab,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab { ...args } />;

export const Normal = Template.bind({});
Normal.args = {};
