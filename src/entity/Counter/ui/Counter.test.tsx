import { act, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';
import componentRender from '@/shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
  test('Counter render value', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 5 } } });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
    screen.debug();
  });

  test('Counter increment', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 5 } } });
    await act(async () => {
      userEvent.click(screen.getByTestId('increment-btn'));
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('6');
    screen.debug();
  });

  test('Counter decrement', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 5 } } });
    await act(async () => {
      userEvent.click(screen.getByTestId('decrement-btn'));
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('4');
    screen.debug();
  });
});
