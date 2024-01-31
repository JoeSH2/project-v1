import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';
import { ArticleTabsFilters } from './ArticleTabsFilters';

const meta: Meta<typeof ArticleTabsFilters> = {
  title: 'features/ArticleTabsFilters',
  component: ArticleTabsFilters,
};

export default meta;
type Story = StoryObj<typeof ArticleTabsFilters>;

export const Primary: Story = {
  args: {},
};
Primary.decorators = [StoreDecorator({})];
// import { Theme } from 'app/providers/ThemesProvider';
// import React from 'react';
// import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
//
// import { ArticleTabsFilters } from './ArticleTabsFilters';
//
// export default {
//   title: 'features/ArticleTabsFilters',
//   component: ArticleTabsFilters,
//   argTypes: { backgroundColor: { control: 'color' } },
// } as ComponentMeta<typeof ArticleTabsFilters>;
//
// // eslint-disable-next-line react/jsx-props-no-spreading
// const Template: ComponentStory<typeof ArticleTabsFilters> = args => <ArticleTabsFilters {...args} />;
//
// export const Clear = Template.bind({});
// Clear.args = {};
//
// export const Default = Template.bind({});
// Default.args = {};
// Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
