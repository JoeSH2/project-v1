import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageError } from '../index';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemesProvider';

export default {
  title: 'pages/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Dark = Template.bind({});
Dark.args = {
  theme: Theme.DARK,
};

export const Default = Template.bind({});
Default.args = {
  theme: Theme.DEFAULT,
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
