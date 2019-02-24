const Koa = require('koa');
const debug = require('debug')('App');
const morgan = require('koa-morgan');

app.use(morgan('dev'));

app.listen(4000, () => debug(`running in port ${3000}`))
