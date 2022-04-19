import { render, screen } from '@testing-library/react';
import App from '../App';

test('testing lazy home', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Ultimas busquedas/i)
  expect(linkElement).toBeInTheDocument();
});
