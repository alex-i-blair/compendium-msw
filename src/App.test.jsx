import App from './App';
import { screen, render } from '@testing-library/react';
import { getDateByIndex } from './utils/getDates';

test('Should be able to render the header with dates of 7 days ago and today', () => {
  const to = getDateByIndex(2);
  const from = getDateByIndex(6);
  render(<App />);
  const banner = screen.getByRole('banner');
  const dates = screen.findByText(`${from} to ${to}`);
});

test('Should be able to return and render a comic img', async () => {
  render(<App />);
  const comicImg = screen.findAllByAltText(
    /The projection's north pole is in a small lake on the island of Mahé in the Seychelles, which is off the top of the map and larger than the rest of the Earth's land area combined./i
  );
});
