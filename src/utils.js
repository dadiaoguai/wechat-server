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
