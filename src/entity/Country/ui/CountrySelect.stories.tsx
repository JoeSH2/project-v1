import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CountryList } from '../model/types/CountryList';
import { CountrySelect } from './CountrySelect';

export default {
  title: 'entity/CountrySelect',
  component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Form = Template.bind({});
Form.args = { value: CountryList.RUSSIA, };
