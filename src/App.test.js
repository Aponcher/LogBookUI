import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard', () => {
  render(<App />);
  const linkElement = screen.getByText(/LCARS Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
