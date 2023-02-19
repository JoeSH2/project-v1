import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemesProvider';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  theme: Theme.DARK,
};

export const Default = Template.bind({});
Default.args = {
  theme: Theme.DEFAULT,
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
