import { Meta, StoryFn } from '@storybook/react';

import { Block } from './Block';

export default {
  title: 'shared/Block',
  component: Block,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Block>;

const Template: StoryFn<typeof Block> = args => <Block {...args} />;

export const Normal = Template.bind({});
// eslint-disable-next-line react/no-unescaped-entities
Normal.args = {
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in voluptas omnis possimus
      aliquid cum. Ut harum nobis nisi iste, totam odio dolore similique provident necessitatibus
      eligendi repudiandae dolorum explicabo animi minima voluptates veritatis. Suscipit eum tempore
      cumque unde veritatis adipisci rem aliquam voluptatem, tenetur praesentium eius, accusamus
      enim laborum repellat minima ipsam ex neque amet, magnam consequuntur temporibus quis sequi
      earum. Praesentium dolorem nostrum aperiam nobis? Porro ad doloremque, perspiciatis cupiditate
      cumque officiis asperiores voluptates consectetur placeat? Quas laudantium doloribus
      praesentium alias minima explicabo dolores culpa consequuntur quaerat, quasi possimus animi
      similique veniam ipsum! Debitis voluptate hic dicta, inventore cupiditate error quam eos
      minus?
    </div>
  ),
};
