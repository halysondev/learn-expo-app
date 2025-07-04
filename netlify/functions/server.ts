import { createRequestHandler } from '@expo/server/adapter/netlify';
import path from 'path';

const handler = createRequestHandler({
  build: path.join(__dirname, '../../dist/server'),
});

module.exports = { handler };
