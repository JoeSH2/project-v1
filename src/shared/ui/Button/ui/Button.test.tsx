import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

test('renders full components', () => {
  // eslint-disable-next-line i18next/no-literal-string
  render(<Button>Text</Button>);
  expect(screen.getByText('Text').textContent).toBe('Text');
  screen.debug();
});

test('renders class clear', () => {
  // eslint-disable-next-line i18next/no-literal-string
  render(<Button theme={ButtonTheme.CLEAR}>Text</Button>);
  expect(screen.getByText('Text').className).toBe('Button clear');
  screen.debug();
});
