import App from './App';
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';

test('Should be able to render the header with dates of 7 days ago and today', async () => {
  render(<App />);
  await waitForElementToBeRemoved(screen.getByText(/loading.../i));
  const banner = screen.getByRole('banner');
  const fromDate = await screen.findByText(
    /sun may 15 2022 to sun may 29 2022/i
  );
});

test('Should be able to return and render a comic img', async () => {
  render(<App />);
  const comicImg = await screen.findByRole('img', {
    name: /the projection's north pole is in a small lake on the island of mahé in the seychelles, which is off the top of the map and larger than the rest of the earth's land area combined\./i,
  });
});
