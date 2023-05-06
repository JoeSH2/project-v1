import { fireEvent, screen, } from '@testing-library/react';
import componentRender from 'shared/lib/tests/componentRender/componentRender';
import { Sidebare } from 'widgets/Sidebare';

test('renders full components', () => {
  componentRender(<Sidebare />);
  expect(screen.getByTestId('sidebare'));
  screen.debug();
});

test('toggle sidebare', () => {
  componentRender(<Sidebare />);
  const toggleButton = screen.getByTestId('toggle-sidebare');
  fireEvent.click(toggleButton);
  expect(screen.getByTestId('sidebare')).toHaveClass('collapse');
  screen.debug();
});
