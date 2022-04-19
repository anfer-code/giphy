import { render, screen } from '@testing-library/react';
import App from './App';

test('testing of my app', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Ultimas busquedas/i);
  expect(linkElement).toBeInTheDocument();
});
