import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CurrencyList } from '../model/types/CurrencyList';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entity/CurrencySelect',
  component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Form = Template.bind({});
Form.args = { value: CurrencyList.EUR, };
