import React, { ChangeEvent, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import style from './Select.module.scss';

type SelectOptions = {
    value: string,
    content: string;
}

interface SelectProps {
  className?: string;
  children?: React.ReactNode;
  name?: string;
  options?: SelectOptions[]
  value?: string;
  onChange?: (value: string) => void;
  theme?: 'theme';
  readonly?: boolean;
}

export const Select: FC<SelectProps> = ({
  className,
  name,
  value,
  onChange,
  readonly,
  options,
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={style.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  return (
    <select
      disabled={readonly}
      value={value}
      onChange={onChangeHandler}
      className={classNames(style.Select, { [style.readonly]: readonly }, [className])}
      name={name}
    >
      {optionsList}
    </select>
  );
};
