import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore';
import { ForbiddenPage } from '../index';

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ForbiddenPage>;

const Template: StoryFn<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const Default = Template.bind({});
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
