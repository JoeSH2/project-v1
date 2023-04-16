import { getProfileReadonly } from 'entity/Profile/model/selectors/getProfileReadonly';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';

import { CountryList } from '../model/types/CountryList';
import style from './CountrySelect.module.scss';

interface CountrySelectProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode;
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

export const CountrySelect: FC<CountrySelectProps> = ({
  onChange, className, readonly, value,
}) => (
  (
    <Select
      className={classNames(style.CountrySelect, { }, [className])}
      onChange={onChange}
      options={options}
      readonly={readonly}
      value={value}
    />
  )
);
