import { Meta, StoryFn } from '@storybook/react';
import { CountryList, CountrySelect } from '@/entity/Country';

export default {
  title: 'entity/CountrySelect',
  component: CountrySelect,
} as Meta<typeof CountrySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof CountrySelect> = args => <CountrySelect {...args} />;

export const Form = Template.bind({});
Form.args = { value: CountryList.RUSSIA };
