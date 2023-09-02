import React, { FC } from 'react';

import { SelectList } from 'shared/ui/SelectList';
import { CurrencyList } from '../model/types/CurrencyList';
import style from './CurrencySelect.module.scss';

interface CurrencySelectProps {
  className?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  value?: CurrencyList;
}

const options = [
  { value: CurrencyList.RUB, content: CurrencyList.RUB },
  { value: CurrencyList.EUR, content: CurrencyList.EUR },
  { value: CurrencyList.USD, content: CurrencyList.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = ({ onChange, className, readonly, value }) => (
  <SelectList
    onChange={onChange}
    items={options}
    value={value}
    classNameList={className}
    classNameBtn={style.btn}
    readonly={readonly}
    positionList='top'
  />
);
