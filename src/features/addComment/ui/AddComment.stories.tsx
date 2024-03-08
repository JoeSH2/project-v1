import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import AddComment from './AddComment';

const meta: Meta<typeof AddComment> = {
  title: 'features/AddComment',
  component: AddComment,
  decorators: [
    StoreDecorator({
      commentForm: {
        isLoading: false,
        text: 'hello!',
        articleId: '1',
        userId: '1',
        error: undefined,
      },
    }),
  ],
};

const Template: StoryFn<typeof AddComment> = args => <AddComment {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
export default meta;
