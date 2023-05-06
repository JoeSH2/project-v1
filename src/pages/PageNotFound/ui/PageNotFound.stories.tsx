import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { PageNotFound } from '../index';

export default {
  title: 'pages/PageNotFound',
  component: PageNotFound,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = () => <PageNotFound />;

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK, };

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT, };
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
