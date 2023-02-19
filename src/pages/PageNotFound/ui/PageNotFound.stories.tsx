import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageNotFound } from '../index';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemesProvider';

export default {
  title: 'pages/PageNotFound',
  component: PageNotFound,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = () => <PageNotFound />;

export const Dark = Template.bind({});
Dark.args = {
  theme: Theme.DARK,
};

export const Default = Template.bind({});
Default.args = {
  theme: Theme.DEFAULT,
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
