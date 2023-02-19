import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemesProvider';

export default {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  theme: Theme.DARK,
};

export const Default = Template.bind({});
Default.args = {
  theme: Theme.DEFAULT,
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
