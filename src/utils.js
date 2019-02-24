var crypto = require("crypto");

exports.getApiFiles = path => {
  const fs = require('fs');

  let result = {}

  fs.readdirSync(path || __dirname, 'utf8')
    .filter(file => file !== 'index.js' && file.endsWith('.js'))
    .forEach(file => {
      result[file.replace(/\.js$/, '')] = require(`${path}/${file}`)
    })

  return result
}

exports.sha1= str => {
  var md5sum = crypto.createHash("sha1");
  md5sum.update(str);
  str = md5sum.digest("hex");
  return str;
}
