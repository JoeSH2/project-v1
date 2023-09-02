import React, { FC } from 'react';

import { SelectList } from 'shared/ui/SelectList';
import { CountryList } from '../model/types/CountryList';
import style from './CountrySelect.module.scss';

interface CountrySelectProps {
  className?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  value?: CountryList;
}

const options = [
  { value: CountryList.RUSSIA, content: CountryList.RUSSIA },
  { value: CountryList.CZECH, content: CountryList.CZECH },
  { value: CountryList.SPAIN, content: CountryList.SPAIN },
  { value: CountryList.UKRAINE, content: CountryList.UKRAINE },
];

export const CountrySelect: FC<CountrySelectProps> = ({ onChange, className, readonly, value }) => (
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
