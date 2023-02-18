import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

test('renders full components', () => {
  render(<Button theme={ButtonTheme.DEFAULT}>Text</Button>);
  expect(screen.getByText('Text')).toBeInTheDocument();
  screen.debug();
});

test('renders class clear', () => {
  render(<Button theme={ButtonTheme.CLEAR}>Text</Button>);
  expect(screen.getByText('Text')).toHaveClass('clear');
  screen.debug();
});
