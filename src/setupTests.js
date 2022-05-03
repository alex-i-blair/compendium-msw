global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));
import { rest } from 'msw';
const comicURL =
  'https://teal-sable-3b82d7.netlify.app/.netlify/functions/getXKCD';

import { xkcdApiData } from './tests/fixtures/comicData';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(comicURL, (req, res, ctx) => res(ctx.json(xkcdApiData)))
);

beforeAll(() => server.listen());
afterAll(() => server.close());
