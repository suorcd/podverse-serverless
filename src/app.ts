import Koa from "koa";
import cors from "@koa/cors";
import bodyparser from "koa-bodyparser";
import mount from "koa-mount";
import loggerMw from "koa-mw-logger";

import { middlewares } from "./middlewares";
import { services } from "./services";

const app = new Koa();

app.use(cors());
app.use(bodyparser());
app.use(loggerMw());

/**
 * Mount all the middlewares on the umbrella app
 */
middlewares.forEach((mw) => {
  app.use(mw);
});

/**
 * Mount all the services on the umbrella app
 */
services.forEach((svc) => {
  app.use(mount(svc.path, svc.service));
});

export default app;
