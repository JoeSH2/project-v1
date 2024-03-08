import { Meta, StoryFn } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import AvatarIcon from './art.jpg';

const meta: Meta<typeof CommentCard> = {
  title: 'entity/CommentCard',
  component: CommentCard,
  args: {
    comment: {
      id: '1',
      text: 'Hello!',
      user: {
        id: '1',
        username: 'ADMIN',
        avatar: AvatarIcon,
      },
    },
    isLoading: false,
  },
};

const Template: StoryFn<typeof CommentCard> = args => <CommentCard {...args} />;

export const Form = Template.bind({});
Form.args = {};
Form.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
export default meta;
