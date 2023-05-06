import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ThemeSwitcher>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK, };

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT, };
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
