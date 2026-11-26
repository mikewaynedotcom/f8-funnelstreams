import { serveStdio } from '@modelcontextprotocol/server/stdio';
import { factory } from './handler.mjs';
serveStdio(factory);
