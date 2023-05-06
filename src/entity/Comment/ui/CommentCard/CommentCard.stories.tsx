import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountryList, CountrySelect } from 'entity/Country';

import { Comment } from '../../model/types/comment';

export default {
  title: 'entity/CountrySelect',
  component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Form = Template.bind({});
Form.args = { value: CountryList.RUSSIA, };
