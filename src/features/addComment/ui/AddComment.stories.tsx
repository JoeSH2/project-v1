import { Meta, StoryFn } from '@storybook/react';
import { AddComment } from '@/features/addComment';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';

export default {
  title: 'shared/AddComment',
  component: AddComment,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof AddComment>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof AddComment> = args => <AddComment {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator({
    commentForm: {
      isLoading: false,
      text: 'Nice comment',
      articleId: '1',
      userId: '1',
    },
  }),
];
