import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const element = screen.getByTestId('app');
  expect(element).toBeInTheDocument();
});

test('renders title text', () => {
  render(<App />);
  const element = screen.getByTestId('appHeaderTitle');
  expect(element.textContent).toEqual('Is your password strong enough?')
});
