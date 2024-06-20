import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import componentRender from '@/shared/lib/tests/componentRender/componentRender';

import { Counter } from './Counter';

describe('Counter', () => {
  test('Counter render value', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 5 } } });
    expect(screen.getByTestId('counter-value').textContent).toBe('5');
    screen.debug();
  });

  test('Counter increment', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 5 } } });
    await userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('counter-value').textContent).toBe('6');
    screen.debug();
  });

  test('Counter decrement', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 5 } } });
    await userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('counter-value').textContent).toBe('4');
    screen.debug();
  });
});
