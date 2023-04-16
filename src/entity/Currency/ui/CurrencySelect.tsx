import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';

import { CurrencyList } from '../model/types/CurrencyList';
import style from './CurrencySelect.module.scss';

interface CurrencySelectProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
  readonly?: boolean;
  value?: CurrencyList;
}

const options = [
  { value: CurrencyList.RUB, content: CurrencyList.RUB },
  { value: CurrencyList.EUR, content: CurrencyList.EUR },
  { value: CurrencyList.USD, content: CurrencyList.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = ({
  onChange, className, readonly, value,
}) => (
  <Select
    className={classNames(style.CountrySelect, { }, [className])}
    onChange={onChange}
    options={options}
    readonly={readonly}
    value={value}
  />
);
