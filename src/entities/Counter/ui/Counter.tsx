import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '..';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const increment = () => {
    dispatch(counterActions.increment());
  };
  return (
    <>
      <h1 data-testid="counter-value">{value}</h1>
      <button data-testid="decrement-btn" onClick={decrement} type="button">-</button>
      <button data-testid="increment-btn" onClick={increment} type="button">+</button>
    </>
  );
};
