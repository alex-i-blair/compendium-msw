global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));
import { rest } from 'msw';
const url = '/.netlify/functions/getXKCD';
import { xkcdApiData } from './tests/fixtures/comicData';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(url, (req, res, ctx) => res(ctx.json(xkcdApiData)))
);

beforeAll(() => server.listen());
afterAll(() => server.close());
