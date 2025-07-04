import { createRequestHandler } from '@expo/server/adapter/vercel';
import path from 'path';

const handler = createRequestHandler({
  build: path.join(__dirname, '../dist/server'),
});

module.exports = { handler };
