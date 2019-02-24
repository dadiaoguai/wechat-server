const config = require('config');
const utils = require('../utils');
const debug = require('debug')('App:hello:');

exports.validateToken = async ctx => {
  const {
    signature,
    timestamp,
    nonce,
    echostr
  } = ctx.query;

  const oriArray = [nonce, timestamp, config.token];
  oriArray.sort();

  const original = utils.sha1(oriArray.join(''));

  debug('signature', signature);
  debug('original', original);

  if (signature == original) {
    ctx.body = echostr;
  } else {
    ctx.body = 'failed';
  }
}
