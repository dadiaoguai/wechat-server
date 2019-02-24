const Koa = require('koa');
const app = new Koa();
const debug = require('debug')('App:');
const config = require('config');
const morgan = require('koa-morgan');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const routes = require('./src/routes');
const router = new Router();

app.use(morgan('dev'));
app.use(bodyParser());

routes(router);
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, () => debug(`running in port ${config.port}`));
