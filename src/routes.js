const controller = require('./controller');
const debug = require('debug')('App:routes');

module.exports = (router) => {
  router.get('/', controller.hello.hello);
}
