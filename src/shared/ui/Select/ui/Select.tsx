import React, { ChangeEvent, ReactNode, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import style from './Select.module.scss';

export type SelectOptions<T> = {
	value: T,
	content: ReactNode;
}

interface SelectProps<T extends string> {
	className?: string;
	name?: string;
	options?: SelectOptions<T>[]
	value?: T;
	onChange?: (value: T) => void;
	readonly?: boolean;
}

export const Select = <T extends string>(
	{
		className,
		name,
		value,
		onChange,
		readonly,
		options,
	}: SelectProps<T>) => {
	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T);
	};

	const optionsList = useMemo(() => options?.map((opt, i) => (
		<option
			className={style.option}
			value={opt.value}
			key={`${opt.value} ${i}`}
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
