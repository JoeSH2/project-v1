import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCard } from './ArticleCard';

export default {
   title: 'shared/ArticleCard',
   component: ArticleCard,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => <ArticleCard { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
