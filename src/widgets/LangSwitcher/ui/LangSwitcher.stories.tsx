import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { LangSwitcher } from './LangSwitcher';

export default {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof LangSwitcher>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK, };

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT, };
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
