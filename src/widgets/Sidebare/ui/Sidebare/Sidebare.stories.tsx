import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebare } from './Sidebare';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemesProvider';

export default {
  title: 'widgets/Sidebare',
  component: Sidebare,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebare>;

const Template: ComponentStory<typeof Sidebare> = (args) => <Sidebare {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  theme: Theme.DARK,
};

export const Default = Template.bind({});
Default.args = {
  theme: Theme.DEFAULT,
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
