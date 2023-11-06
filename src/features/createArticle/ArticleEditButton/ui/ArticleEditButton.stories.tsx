import { Meta, StoryFn } from '@storybook/react';
import { ArticleEditButton } from './ArticleEditButton';

export default {
  title: 'shared/ArticleEditButton',
  component: ArticleEditButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleEditButton>;

const Template: StoryFn<typeof ArticleEditButton> = args => <ArticleEditButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
