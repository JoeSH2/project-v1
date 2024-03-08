import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebare } from './Sidebare';
import componentRender from '@/shared/lib/tests/componentRender/componentRender';

test('renders full components', () => {
  componentRender(<Sidebare />);
  expect(screen.getByTestId('sidebare'));
  screen.debug();
});

test('toggle sidebare', async () => {
  componentRender(<Sidebare />);
  const toggleButton = screen.getByTestId('toggle-sidebare');
  await userEvent.click(toggleButton);
  expect(screen.getByTestId('sidebare').className).toBe('Sidebare collapse');
  screen.debug();
});
