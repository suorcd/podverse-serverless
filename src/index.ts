import { createServer, proxy } from "aws-serverless-express";

import app from "./app";

const server = createServer(app.callback());

export const handler = (event, context) => proxy(server, event, context);
