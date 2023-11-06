import { Meta, StoryFn } from '@storybook/react';

import { CurrencyList } from '../model/types/CurrencyList';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entity/CurrencySelect',
  component: CurrencySelect,
} as Meta<typeof CurrencySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof CurrencySelect> = args => <CurrencySelect {...args} />;

export const Form = Template.bind({});
Form.args = { value: CurrencyList.EUR };
