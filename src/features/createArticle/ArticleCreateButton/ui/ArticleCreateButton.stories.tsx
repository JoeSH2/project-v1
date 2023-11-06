import { Meta, StoryFn } from '@storybook/react';
import { ArticleCreateButton } from './ArticleCreateButton';

export default {
  title: 'shared/ArticleCreate',
  component: ArticleCreateButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleCreateButton>;

const Template: StoryFn<typeof ArticleCreateButton> = args => <ArticleCreateButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
