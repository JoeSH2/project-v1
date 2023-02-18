import {
  fireEvent, screen,
} from '@testing-library/react';
import renderComponentTranslations from 'shared/lib/renderComponentTranslations/renderComponentTranslations';
import { Sidebare } from 'widgets/Sidebare';

test('renders full components', () => {
  // eslint-disable-next-line i18next/no-literal-string
  renderComponentTranslations(<Sidebare />);
  expect(screen.getByTestId('sidebare'));
  screen.debug();
});

test('toggle sidebare', () => {
  renderComponentTranslations(<Sidebare />);
  const toggleButton = screen.getByTestId('toggle-sidebare');
  fireEvent.click(toggleButton);
  expect(screen.getByTestId('sidebare')).toHaveClass('collapse');
  screen.debug();
});
