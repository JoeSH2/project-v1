import type { Meta, StoryObj } from '@storybook/react';
import { CountryList } from '../model/types/CountryList';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
  title: 'entity/CountrySelect',
  component: CountrySelect,
};
type Story = StoryObj<typeof CountrySelect>;
export const Primary: Story = {
  args: {
    value: CountryList.RUSSIA,
  },
};
export default meta;
