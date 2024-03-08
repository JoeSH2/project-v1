import React, { FC } from 'react';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterSlice } from '../model/slice/CounterSlice';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import style from './Counter.module.scss';

export const Counter: FC = () => {
  const value = useCounterValue().toString();
  const { increment, decrement } = useCounterSlice();

  const handleDecrement = () => {
    decrement();
  };
  const handleIncrement = () => {
    increment();
  };

  return (
    <VStack className={style.wrapper} align='center' gap='gap8'>
      <h1 data-testid='counter-value'>{value}</h1>
      <HStack gap='gap8'>
        <Button className={style.btn} data-testid='decrement-btn' onClick={handleDecrement} type='button'>
          -
        </Button>
        <Button className={style.btn} data-testid='increment-btn' onClick={handleIncrement} type='button'>
          +
        </Button>
      </HStack>
    </VStack>
  );
};
